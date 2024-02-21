import { execa } from "execa";
import { promises as fs, readFileSync } from "fs";
import { Listr } from "listr2";
import os from "os";
import path, { dirname } from "path";
import { optimize } from "svgo";
import { fileURLToPath } from "url";
import { incompatibleNames } from "../constants.js";

// Paths
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const healthiconsIconsDir = path.join(rootDir, "icons");
const ignoreCleanFilenames = ["HealthIconsContext.tsx"];

// Targets for building icons
const targets = {
  "meta-data": { path: "meta-data.json" },
  "healthicons-react": {
    react: true,
    path: "packages/healthicons-react",
    iconTypes: ["filled", "outline", "negative"],
  }
};

const deepReadDir = async (dirPath) =>
  await Promise.all(
    (
      await fs.readdir(dirPath)
    ).map(async (dirent) => {
      const lstat = await fs.lstat(path.join(dirPath, dirent));
      const p = path.join(dirPath, dirent);
      return lstat.isDirectory() ? await deepReadDir(p) : p;
    })
  );

// Get targets from command line arguments
// (build all targets if no arguments)
const args = process.argv.slice(2);
const cliTargets = [];
args.forEach((target) => {
  if (target in targets) {
    cliTargets.push(target);
  } else {
    console.error(`Target '${target}' doesn't exist!\n\nPossible targets are:`);
    for (const [targetName] of Object.entries(targets)) {
      console.log(`- ${targetName}`);
    }
    process.exit(1);
  }
});

// Build tasks
const tasks = new Listr(
  [
    {
      title: "Fetching icons",
      task: async (ctx) => {
        deepReadDir(healthiconsIconsDir);
        ctx.healthIconsFiles = (await deepReadDir(healthiconsIconsDir))
          .flat(Number.POSITIVE_INFINITY)
          .filter((val) => val.includes(".svg"));
      },
    },
    {
      title: "Building targets",
      skip: (ctx) => !ctx.healthIconsFiles,
      task: (_, task) =>
        task.newListr(
          [
            {
              title: "Building meta-data file",
              enabled: () =>
                cliTargets.length === 0 || cliTargets.includes("meta-data"),
              task: async (ctx) => {
                await fs.writeFile(
                  path.join(rootDir, targets["meta-data"].path),
                  JSON.stringify({
                    icons: ctx.healthIconsFiles.map(
                      (file) => file.split("healthicons/icons/")[1]
                    ),
                  })
                );
              },
            },
            {
              title: "Building React libraries",
              enabled: () =>
                cliTargets.length === 0 ||
                cliTargets.filter((cliTarget) => targets[cliTarget]?.react)
                  .length > 0,
              task: (_, task) =>
                task.newListr(
                  [
                    {
                      title: "Creating temporary directory",
                      task: async (ctx) => {
                        try {
                          ctx.tmpDir = await fs.mkdtemp(
                            path.join(os.tmpdir(), "healthicons-")
                          );
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      title:
                        "Copying icon files to temporary directory, while renaming icons with incompatible names",
                      skip: (ctx) => ctx.skip,
                      task: async (ctx) => {
                        try {
                          // Create icon type directories
                          ["filled", "outline", "negative"].forEach(
                            async (iconType) => {
                              await fs.mkdir(path.join(ctx.tmpDir, iconType));
                            }
                          );

                          const promises = ctx.healthIconsFiles.map((file) => {
                            const srcFilePath = path.join(file);
                            const iconPath = path.parse(file);
                            const iconType = file
                              .split("healthicons/icons/")[1]
                              .split("/")[0]; // get filled or outline or negative
                            const iconName = iconPath.name;
                            const dstFileName =
                              iconName in incompatibleNames
                                ? incompatibleNames[iconName]
                                : iconName;
                            const dstFilePath = path.join(
                              ctx.tmpDir,
                              iconType,
                              `${dstFileName}.svg`
                            );

                            return fs.copyFile(srcFilePath, dstFilePath);
                          });
                          return Promise.all(promises).catch((err) => {
                            ctx.skip = true;
                            throw new Error(err.message);
                          });
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      skip: (ctx) => ctx.skip,
                      task: (_, task) => {
                        const targetsToBuild =
                          cliTargets.length > 0
                            ? cliTargets.filter(
                                (cliTarget) => targets[cliTarget]?.react
                              )
                            : Object.keys(targets).filter(
                                (target) => targets[target].react
                              );
                        const tasks = targetsToBuild.map((target) => {
                          const builtIconsDir = path.join(
                            rootDir,
                            targets[target].path,
                            "src"
                          );
                          return {
                            title: `Building ${target}`,
                            task: (_, task) =>
                              task.newListr(
                                [
                                  {
                                    title: "Cleaning target directory",
                                    task: async (ctx) => {
                                      try {
                                        const files = (
                                          await deepReadDir(builtIconsDir)
                                        ).flat(Number.POSITIVE_INFINITY);
                                        const promises = files
                                          .filter(
                                            (file) =>
                                              !ignoreCleanFilenames.includes(
                                                path.basename(file)
                                              )
                                          )
                                          .map((file) => {
                                            return fs.unlink(path.join(file));
                                          });
                                        return Promise.all(promises).catch(
                                          (err) => {
                                            ctx[target] = { skip: true };
                                            throw new Error(err.message);
                                          }
                                        );
                                      } catch (err) {
                                        ctx[target] = { skip: true };
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                  {
                                    title: "Building icon files",
                                    skip: (ctx) => ctx[target]?.skip,
                                    task: async (ctx) => {
                                      try {
                                        await execa(
                                          "svgr",
                                          [
                                            "--config-file",
                                            path.join(
                                              targets[target].path,
                                              ".svgrrc.json"
                                            ),
                                            "--out-dir",
                                            builtIconsDir,
                                            "--template",
                                            "bin/templates/icon-template.cjs",
                                            "--index-template",
                                            "bin/templates/index-template.cjs",
                                            ctx.tmpDir,
                                          ],
                                          { preferLocal: true }
                                        );
                                      } catch (err) {
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                ],
                                { concurrent: false, exitOnError: false }
                              ),
                          };
                        });
                        return task.newListr(tasks, {
                          concurrent: true,
                          rendererOptions: { collapse: false },
                        });
                      },
                    },
                  ],
                  { concurrent: false }
                ),
            },
          ],
          { concurrent: true }
        ),
    },
    {
      title: "Removing temporary directory",
      skip: (ctx) => !ctx.tmpDir,
      task: async (ctx) => {
        await fs.rm(ctx.tmpDir, { recursive: true });
      },
    },
  ],
  {
    concurrent: false,
    exitOnError: false,
    rendererOptions: { collapse: false, collapseErrors: false },
  }
);

await tasks.run();

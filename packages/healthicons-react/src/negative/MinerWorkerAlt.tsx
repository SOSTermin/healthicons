import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMinerWorkerAlt = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#miner_worker_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM23 10.5h-1.902c.468.566.75 1.29.75 2.078a3.279 3.279 0 0 1-3.27 3.269 3.279 3.279 0 0 1-3.268-3.27c0-.787.282-1.511.75-2.077H14a4.5 4.5 0 1 1 9 0Zm-4.5-.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM32 13.892v3.626c.735.16 1.29.817 1.29 1.598 0 .78-.555 1.439-1.29 1.598V41h-2V20.75h-6.517v19.615A1.64 1.64 0 0 1 21.848 42a1.64 1.64 0 0 1-1.635-1.635v-8.172h-3.269v8.172A1.64 1.64 0 0 1 15.31 42a1.64 1.64 0 0 1-1.635-1.635V28.217c-.899 0-3.675-1.711-3.675-5.925 0-3.176 2.776-4.81 3.675-4.81H30v-3.57c-1.825.11-3.744.473-6 1.088 0-1.511 2.608-2.762 6-2.97V11h2v1.03c3.392.208 6 1.459 6 2.97-2.19-.657-4.092-1.026-6-1.108Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="miner_worker_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMinerWorkerAlt);
export default ForwardRef;

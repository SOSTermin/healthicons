import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUiFolder = (
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
      <g clipPath="url(#ui_folder_svg__a)" fill={props.color}>
        <path d="m24.872 15-1.913-3.482a1 1 0 0 0-.877-.518H9a1 1 0 0 0-1 1v3h16.872Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-9 15a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.082a3 3 0 0 1 2.63 1.555L27.154 15H39Z"
        />
      </g>
      <defs>
        <clipPath id="ui_folder_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiFolder);
export default ForwardRef;

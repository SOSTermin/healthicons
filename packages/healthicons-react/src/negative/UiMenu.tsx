import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUiMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#ui_menu_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM7 10a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2H7ZM6 24a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 12a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2H7Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="ui_menu_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiMenu);
export default ForwardRef;

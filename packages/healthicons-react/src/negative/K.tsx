import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgK = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#K_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18 12v11.172l12.586-12.586a2 2 0 1 1 2.828 2.828L22.828 24l10.586 10.586a2 2 0 1 1-2.828 2.828L20 26.828l-2 2V36a2 2 0 1 1-4 0V12a2 2 0 1 1 4 0Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="K_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgK);
export default ForwardRef;

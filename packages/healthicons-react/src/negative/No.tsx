import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgNo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#no_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-7.778-13.636a1 1 0 0 0 1.414 1.414L24 25.414l6.364 6.364a1 1 0 0 0 1.414-1.414L25.414 24l6.364-6.364a1 1 0 0 0-1.414-1.414L24 22.586l-6.364-6.364a1 1 0 0 0-1.414 1.414L22.586 24l-6.364 6.364Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="no_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNo);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgImm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#imm_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-6 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm2 0c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-20 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-1.5-4a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-8-18a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm21 24a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM31 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 32a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="imm_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgImm);
export default ForwardRef;

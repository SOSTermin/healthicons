import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgV = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#V_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM25.846 36.77a2 2 0 0 1-3.692 0l-10-24a2 2 0 1 1 3.692-1.54L24 30.8l8.154-19.57a2 2 0 0 1 3.692 1.54l-10 24Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="V_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgV);
export default ForwardRef;

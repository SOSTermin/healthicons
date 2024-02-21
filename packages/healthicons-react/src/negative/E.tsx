import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgE = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#E_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h12a2 2 0 1 0 0-4H20v-8h10a2 2 0 1 0 0-4H20v-8h10a2 2 0 1 0 0-4H18Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="E_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgE);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgHospitalSymbol = (
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
      <g clipPath="url(#hospital_symbol_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM3.97 24.291c0-11.046 8.954-20 20-20 11.045 0 20 8.954 20 20s-8.955 20-20 20c-11.046 0-20-8.954-20-20Zm16.021 1.757v7h-4v-18h4v7h8v-7h4v18h-4v-7h-8Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="hospital_symbol_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospitalSymbol);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgAmbulatoryClinic = (
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
      <g clipPath="url(#ambulatory_clinic_svg__a)" fill={props.color}>
        <path d="M26 40h8V24h-8v16ZM21 24h-7v7h7v-7ZM20 9h-2v2h-2v2h2v2h2v-2h2v-2h-2V9Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24.653 9.985H42.5V12.5L38 15.532V40h3a1 1 0 1 1 0 2h-3v.015H10V42H7a1 1 0 1 1 0-2h3V15.497l-4-3.03V9.984h7.347a6.002 6.002 0 0 1 11.306 0Z"
        />
      </g>
      <defs>
        <clipPath id="ambulatory_clinic_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAmbulatoryClinic);
export default ForwardRef;

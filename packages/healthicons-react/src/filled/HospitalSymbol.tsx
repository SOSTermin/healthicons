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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.964 3.98C12.918 3.99 3.97 12.951 3.98 23.997c.01 11.045 8.97 19.992 20.017 19.983 11.045-.009 19.992-8.97 19.983-20.016C43.971 12.918 35.01 3.97 23.964 3.98ZM19.99 33.047v-7h8v7h4v-18h-4v7h-8v-7h-4v18h4Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospitalSymbol);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEmergencyOperationsCenter = (
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
      <g clipPath="url(#emergency_operations_center_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm26.293 11.464a7.065 7.065 0 0 1 1.414-1.414l4.192 4.193.95-.95a1 1 0 0 1 1.415 1.414l-.95.95 4.192 4.192a7.076 7.076 0 0 1-1.414 1.415A7.009 7.009 0 0 1 29 22.03V24h13v2h-2v14h1a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1V26H6v-2h9v-3h-4v-2h4v-1h-2a3 3 0 1 1 0-6h2v-1a1 1 0 1 1 2 0v1h2a3 3 0 1 1 0 6h-2v1h4v2h-4v3h4.586l4.477-4.477a7.006 7.006 0 0 1 .23-8.059Zm.707 9.95L24.414 24H27v-2.586Zm7.657-1.585a5.002 5.002 0 0 1-6.93-6.93l6.93 6.93ZM31 40h5v-8h-5v8ZM19 16h-2v-2h2a1 1 0 1 1 0 2Zm-6 0h2v-2h-2a1 1 0 1 0 0 2Zm6 16h5v4h-5v-4Zm-2 0h-5v4h5v-4Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="emergency_operations_center_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEmergencyOperationsCenter);
export default ForwardRef;

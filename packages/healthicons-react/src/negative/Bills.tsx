import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBills = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#bills_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.49 36v-4h2v1.038A3 3 0 0 1 15.484 36h24.022a2.999 2.999 0 0 1 2.982-3V22.996A3 3 0 0 1 40 21.67V18h2.49a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-30a2 2 0 0 1-2-2ZM25 20a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 12a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12Zm29.001 0H8.998A3 3 0 0 1 6 15v10.038A2.999 2.999 0 0 1 8.996 28h24.021A3.001 3.001 0 0 1 36 25V14.996A3 3 0 0 1 33.001 12Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="bills_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBills);
export default ForwardRef;

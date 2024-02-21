import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCardiogramE = (
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
      <g clipPath="url(#cardiogram_e_svg__a)" fill={props.color}>
        <path d="M14 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9ZM11 30a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM12 34a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H12Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM15 6a3 3 0 0 0-3 3H9a3 3 0 0 0-3 3v9h7.035l3.298-5.534 2 7.339L20.51 20h5.258a1 1 0 1 1 0 2H21.49l-4.034 5.195-1.815-6.661L14.171 23H6v16a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3h-8Zm21 12a3 3 0 1 1 6 0v3h-6v-3Zm0 20V23h6v15l-3 4-3-4Z"
        />
      </g>
      <defs>
        <clipPath id="cardiogram_e_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCardiogramE);
export default ForwardRef;

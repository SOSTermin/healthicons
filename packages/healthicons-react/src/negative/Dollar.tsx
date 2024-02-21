import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgDollar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#dollar_svg__a)" fill={props.color}>
        <path d="M18 18a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4ZM30 30a4 4 0 0 1-4 4v-8a4 4 0 0 1 4 4Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 6a2 2 0 0 1 2 2v2a8.003 8.003 0 0 1 7.544 5.334 2 2 0 0 1-3.771 1.332A4.002 4.002 0 0 0 26 14v8a8 8 0 1 1 0 16v2a2 2 0 1 1-4 0v-2a8.003 8.003 0 0 1-7.544-5.334 2 2 0 0 1 3.771-1.332A4.002 4.002 0 0 0 22 34v-8a8 8 0 1 1 0-16V8a2 2 0 0 1 2-2Z"
        />
      </g>
      <defs>
        <clipPath id="dollar_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDollar);
export default ForwardRef;

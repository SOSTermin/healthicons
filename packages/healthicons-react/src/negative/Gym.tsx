import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgGym = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#gym_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm23 7h3v16h-3V16Zm8 3h-3v10h3v-4h1v-2h-1v-4ZM19 32h-3V16h3v16Zm-8-3h3V19h-3v4h-1v2h1v4Zm16-4h-6v-2h6v2Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="gym_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGym);
export default ForwardRef;

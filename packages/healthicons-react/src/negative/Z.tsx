import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgZ = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#Z_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM14 14h15.73L12.464 34.72A2 2 0 0 0 14 38h20a2 2 0 1 0 0-4H18.27l17.266-20.72A2 2 0 0 0 34 10H14a2 2 0 0 0 0 4Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="Z_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgZ);
export default ForwardRef;

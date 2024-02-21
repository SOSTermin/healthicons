import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgG = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#G_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM30.667 16.546a2 2 0 1 0 2.666-2.981 14 14 0 1 0 0 20.87 2 2 0 0 0 .667-1.49V24a2 2 0 0 0-2-2h-8a2 2 0 1 0 0 4h6v6a10 10 0 1 1 .667-15.454Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="G_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgG);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgDizzy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g
        clipPath="url(#dizzy_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.color}
      >
        <path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm3.293-22.707a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L31.914 20.5l1.793 1.793a1 1 0 0 1-1.414 1.414L30.5 21.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414Zm-13 0a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L18.914 20.5l1.793 1.793a1 1 0 0 1-1.414 1.414L17.5 21.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414ZM31 32c0 3.314-3.134 4-7 4s-7-.686-7-4 3.134-6 7-6 7 2.686 7 6Z" />
        <path d="M48 0H0v48h48V0ZM24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z" />
      </g>
      <defs>
        <clipPath id="dizzy_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDizzy);
export default ForwardRef;

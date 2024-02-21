import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgHomeAlt = (
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
      <g clipPath="url(#home_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm20 31v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V23.925l-3.294 3.283a1 1 0 0 1-1.412-1.416l17.056-17 .708-.706.706.708 16.944 17a1 1 0 0 1-1.416 1.412L37 23.903V39a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="home_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHomeAlt);
export default ForwardRef;

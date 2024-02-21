import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBaby0203Alt = (
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
      <g clipPath="url(#baby_0203_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-9 16.041V16.447c.99.407 2.012.9 3.047 1.466.191.11.38.215.568.317a40.935 40.935 0 0 1 6.371 4.522c3.579 3.091 6.57 6.764 8.014 10.434v.855C33 38.021 30.187 42 24 42c-6.188 0-9-4.548-9-7.959ZM26.293 21.24a43.134 43.134 0 0 0-1.26-1.048C27.49 20.186 29.957 19.178 33 17v11.83c-1.738-2.752-4.107-5.346-6.707-7.591Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="baby_0203_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBaby0203Alt);
export default ForwardRef;

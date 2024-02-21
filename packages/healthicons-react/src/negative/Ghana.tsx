import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgGhana = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#ghana_svg__a)" fill={props.color}>
        <path d="M20.173 14.732a9.996 9.996 0 0 1 1.827-.56v19.596a9.995 9.995 0 0 1-6.315-4.242 10 10 0 0 1 4.488-14.794Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 6a2 2 0 0 1 2 2v2.114a14 14 0 0 1 7.9 3.957 2 2 0 0 1-2.829 2.828A10 10 0 0 0 26 14.172v19.596a9.999 9.999 0 0 0 5.071-2.727A2 2 0 0 1 33.9 33.87a14 14 0 0 1-7.9 3.957V40a2 2 0 1 1-4 0v-2.173a14 14 0 0 1 0-27.713V8a2 2 0 0 1 2-2Z"
        />
      </g>
      <defs>
        <clipPath id="ghana_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGhana);
export default ForwardRef;

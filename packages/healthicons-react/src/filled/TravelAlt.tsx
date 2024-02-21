import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTravelAlt = (
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
      <path
        d="M35 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19 16a2 2 0 1 0 0 4h7v20a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V27.917A6.002 6.002 0 0 0 36 16H19Zm20 6a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 32a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8Zm4 7v-6h2v6h-2Zm7-6v6h2v-6h-2ZM11 28a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h-2v-2h-3v2h-2v-2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTravelAlt);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTriangleLarge = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 5a1 1 0 0 1 .894.553l18 36A1 1 0 0 1 42 43H6a1 1 0 0 1-.894-1.447l18-36A1 1 0 0 1 24 5Zm0 3.236L7.618 41h32.764L24 8.236Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTriangleLarge);
export default ForwardRef;

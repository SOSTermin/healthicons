import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTriangleSmall = (
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
        d="M24.894 11.553a1 1 0 0 0-1.788 0l-12 24A1 1 0 0 0 12 37h24a1 1 0 0 0 .894-1.447l-12-24Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTriangleSmall);
export default ForwardRef;

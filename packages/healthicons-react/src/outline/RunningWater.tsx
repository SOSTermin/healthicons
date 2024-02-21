import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRunningWater = (
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
        d="M8 12V6H6v36h2V22h3v2h14v-3.333h3a2 2 0 0 1 2 2V23h-2v8h14v-8h-2v-1c0-5.523-4.477-10-10-10h-5v-2h-6V8h7a1 1 0 1 0 0-2H10a1 1 0 1 0 0 2h7v2h-6v2H8Zm30 10a8 8 0 0 0-8-8h-5v4.667h3a4 4 0 0 1 4 4V23h6v-1Zm2 3H30v4h10v-4ZM23 12H13v10h10V12Zm-12 8H8v-6h3v6Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.5 42c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42Zm0-2c.757 0 1.5-.66 1.5-1.636 0-.932-.552-2.087-1.363-3.193a11.689 11.689 0 0 0-.137-.183c-.046.06-.092.121-.137.183-.81 1.105-1.363 2.26-1.363 3.193 0 .976.743 1.636 1.5 1.636Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRunningWater);
export default ForwardRef;

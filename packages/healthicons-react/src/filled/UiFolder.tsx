import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUiFolder = (
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
        d="M24.712 10.555 27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.082a3 3 0 0 1 2.63 1.555ZM8 12a1 1 0 0 1 1-1h13.082a1 1 0 0 1 .877.518L24.872 15H8v-3Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiFolder);
export default ForwardRef;

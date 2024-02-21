import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUiSecure = (
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
        d="M9 20a2 2 0 0 1 2-2h3v-2c0-5.523 4.477-10 10-10s10 4.477 10 10v2h3a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V20Zm15-10a6 6 0 0 1 6 6v2H18v-2a6 6 0 0 1 6-6Zm9 16H15v-2h18v2Zm-18 5h18v-2H15v2Zm18 5H15v-2h18v2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiSecure);
export default ForwardRef;

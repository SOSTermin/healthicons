import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSquareMedium = (
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
        d="M11 11v26h26V11H11Zm-1-2a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H10Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSquareMedium);
export default ForwardRef;

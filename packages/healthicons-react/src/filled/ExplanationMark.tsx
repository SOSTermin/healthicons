import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgExplanationMark = (
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
        d="M24 10a2 2 0 0 1 2 2v18a2 2 0 1 1-4 0V12a2 2 0 0 1 2-2ZM24 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgExplanationMark);
export default ForwardRef;

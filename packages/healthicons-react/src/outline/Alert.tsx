import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M21 8a3 3 0 1 1 6 0v22a3 3 0 1 1-6 0V8Zm0 32a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        stroke={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlert);
export default ForwardRef;

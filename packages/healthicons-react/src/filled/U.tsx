import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgU = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M16 10a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V12a2 2 0 1 1 4 0v16c0 5.523-4.477 10-10 10s-10-4.477-10-10V12a2 2 0 0 1 2-2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgU);
export default ForwardRef;

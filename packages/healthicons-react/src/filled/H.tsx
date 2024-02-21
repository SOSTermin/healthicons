import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgH = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M16 10a2 2 0 0 1 2 2v10h12V12a2 2 0 1 1 4 0v24a2 2 0 1 1-4 0V26H18v10a2 2 0 1 1-4 0V12a2 2 0 0 1 2-2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgH);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgL = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M18 10a2 2 0 0 1 2 2v22h10a2 2 0 1 1 0 4H18a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgL);
export default ForwardRef;

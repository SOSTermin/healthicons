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
        d="M15 12a3 3 0 1 1 6 0v21h9a3 3 0 1 1 0 6H18a3 3 0 0 1-3-3V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H20a1 1 0 0 1-1-1V12a1 1 0 0 0-1-1Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgL);
export default ForwardRef;

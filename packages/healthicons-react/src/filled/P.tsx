import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgP = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M14 12a2 2 0 0 1 2-2h10a8 8 0 1 1 0 16h-8v10a2 2 0 1 1-4 0V12Zm4 10h8a4 4 0 0 0 0-8h-8v8Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgP);
export default ForwardRef;

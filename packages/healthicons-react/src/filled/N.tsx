import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgN = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M16 17.524V36a2 2 0 1 1-4 0V12a2 2 0 0 1 3.536-1.28L32 30.476V12a2 2 0 1 1 4 0v24a2 2 0 0 1-3.536 1.28L16 17.524Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgN);
export default ForwardRef;

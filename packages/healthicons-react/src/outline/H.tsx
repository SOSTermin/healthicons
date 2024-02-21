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
        d="M13 12a3 3 0 1 1 6 0v9h10v-9a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0v-9H19v9a3 3 0 1 1-6 0V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V25h14v11a1 1 0 1 0 2 0V12a1 1 0 1 0-2 0v11H17V12a1 1 0 0 0-1-1Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgH);
export default ForwardRef;

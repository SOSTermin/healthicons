import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgIud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M11 6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1 1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H25v30.126A4.002 4.002 0 0 1 24 44a4 4 0 0 1-1-7.874V6H11Zm11 34a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIud);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRupee = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M15 12a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6 3 3 0 1 1 0 6h-1.512a9.024 9.024 0 0 1-5.276 5.41l5.284 7.926a3 3 0 0 1-4.992 3.328l-8-12A3 3 0 0 1 18 21a3 3 0 0 1 0-6 3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h2a4.998 4.998 0 0 1 4.33 2.5 1 1 0 0 1-.865 1.5H18a1 1 0 1 0 0 2h5.465a1 1 0 0 1 .866 1.5A4.998 4.998 0 0 1 20 23h-2a1 1 0 0 0-.832 1.555l8 12a1 1 0 0 0 1.664-1.11l-6.037-9.056a1 1 0 0 1 .63-1.534 7.012 7.012 0 0 0 5.354-5.104 1 1 0 0 1 .969-.751H30a1 1 0 1 0 0-2h-2.252a1 1 0 0 1-.969-.75 6.949 6.949 0 0 0-.715-1.75 1 1 0 0 1 .866-1.5H30a1 1 0 1 0 0-2H18Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRupee);
export default ForwardRef;

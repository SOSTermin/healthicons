import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRx = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6ZM4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24Zm12 6V14a1 1 0 0 1 1-1h6a5 5 0 0 1 .398 9.984L28 27.586l4.293-4.293 1.414 1.414L29.414 29l4.293 4.293-1.414 1.414L28 30.414l-4.293 4.293-1.414-1.414L26.586 29l-6-6H18v7h-2Zm2-9h5a3 3 0 1 0 0-6h-5v6Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRx);
export default ForwardRef;

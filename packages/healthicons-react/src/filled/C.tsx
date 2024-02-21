import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgC = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M31.071 16.929a10 10 0 1 0 0 14.142A2 2 0 1 1 33.9 33.9a14 14 0 1 1 0-19.8 2 2 0 0 1-2.829 2.829Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgC);
export default ForwardRef;

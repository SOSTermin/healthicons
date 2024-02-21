import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgImm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M26 25.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 24a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-2 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        fill={props.color}
      />
      <path
        d="M14.5 11a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7ZM39 31.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 32a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-2 0c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgImm);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M6 36c0-4.965 11.992-8 18-8 6.008 0 18 3.035 18 8v6H6v-6Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10 4.477 10 10 10Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPerson);
export default ForwardRef;

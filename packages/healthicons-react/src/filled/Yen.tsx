import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgYen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M35.28 10.464a2 2 0 0 1 .256 2.816L28.27 22H30a2 2 0 1 1 0 4h-4v2h4a2 2 0 1 1 0 4h-4v4a2 2 0 0 1-4 0v-4h-4a2 2 0 0 1 0-4h4v-2h-4a2 2 0 0 1 0-4h1.73l-7.266-8.72a2 2 0 1 1 3.072-2.56L24 20.876l8.464-10.156a2 2 0 0 1 2.816-.256Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgYen);
export default ForwardRef;

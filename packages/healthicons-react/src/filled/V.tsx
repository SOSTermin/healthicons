import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgV = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M24 38a2 2 0 0 0 1.846-1.23l10-24a2 2 0 0 0-3.692-1.54L24 30.8l-8.154-19.57a2 2 0 0 0-3.692 1.54l10 24A2 2 0 0 0 24 38Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgV);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPositive = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
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
        d="M13 24a1 1 0 0 1 1-1h9v-9a1 1 0 1 1 2 0v9h9a1 1 0 1 1 0 2h-9v9a1 1 0 1 1-2 0v-9h-9a1 1 0 0 1-1-1Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm0-2c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPositive);
export default ForwardRef;

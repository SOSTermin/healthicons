import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgFinanceDept = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm8 4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H17Z"
        fill={props.color}
      />
      <path
        d="M17 12h14v9H17v-9ZM21.273 24.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM25.636 24.636a1.636 1.636 0 1 1-3.272 0 1.636 1.636 0 0 1 3.272 0ZM30 24.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM21.273 29A1.636 1.636 0 1 1 18 29a1.636 1.636 0 0 1 3.273 0ZM25.636 29a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM30 29a1.636 1.636 0 1 1-3.273 0A1.636 1.636 0 0 1 30 29ZM30 33.364a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM18 33.364c0-.904.733-1.637 1.636-1.637H24A1.636 1.636 0 1 1 24 35h-4.364A1.636 1.636 0 0 1 18 33.364Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFinanceDept);
export default ForwardRef;

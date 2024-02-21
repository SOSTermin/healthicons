import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPavedRoadAlt = (
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
        d="M33 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0V7ZM13 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0V7ZM23 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM23 22a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM23 33a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPavedRoadAlt);
export default ForwardRef;

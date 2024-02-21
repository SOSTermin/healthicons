import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSquareSmall = (
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
        d="M12 13a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V13Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSquareSmall);
export default ForwardRef;

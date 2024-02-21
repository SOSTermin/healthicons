import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const Svg5 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M34 12a2 2 0 0 0-2-2H18a2 2 0 0 0-1.961 1.608l-2 10a2 2 0 0 0 3.07 2.056C17.781 23.216 20.395 22 24 22a6 6 0 0 1 0 12h-2.218c-1.823 0-3.344-1.137-3.901-2.68a2 2 0 1 0-3.762 1.36c1.126 3.118 4.147 5.32 7.663 5.32H24c5.523 0 10-4.477 10-10s-4.477-10-10-10c-2.014 0-3.815.304-5.304.72L19.64 14H32a2 2 0 0 0 2-2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg5);
export default ForwardRef;

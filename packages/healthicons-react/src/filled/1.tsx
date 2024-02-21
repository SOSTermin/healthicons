import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const Svg1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M27.765 10.152A2 2 0 0 1 29 12v24a2 2 0 0 1-4 0V16.828l-1.586 1.586a2 2 0 0 1-2.828-2.828l5-5a2 2 0 0 1 2.18-.434Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg1);
export default ForwardRef;

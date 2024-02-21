import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const Svg4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M28.58 10.086A2 2 0 0 1 30 12v16h2a2 2 0 1 1 0 4h-2v4a2 2 0 0 1-4 0v-4H16a2 2 0 0 1-1.664-3.11l12-18a2 2 0 0 1 2.244-.804ZM26 28v-9.394L19.737 28H26Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg4);
export default ForwardRef;

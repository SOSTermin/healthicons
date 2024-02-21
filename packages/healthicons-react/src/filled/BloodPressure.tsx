import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBloodPressure = (
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
        d="M6 18.724C6 12.641 10.036 7 15.563 7c3.835 0 6.68 2.53 8.437 6.121C25.756 9.531 28.602 7 32.438 7 37.965 7 42 12.642 42 18.724c0 1.079-.123 2.131-.35 3.155A10.48 10.48 0 0 0 33.5 18C27.701 18 23 22.701 23 28.5a10.5 10.5 0 0 0 5.912 9.447C26.122 39.908 24 41 24 41S6 32.304 6 18.724Z"
        fill={props.color}
      />
      <path
        d="M36 29a2 2 0 1 1-3.97-.348l-2.42-2.42 1.415-1.414 2.299 2.3A2 2 0 0 1 36 29Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 28.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-2 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodPressure);
export default ForwardRef;

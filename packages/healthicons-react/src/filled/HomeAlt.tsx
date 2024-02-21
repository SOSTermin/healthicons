import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgHomeAlt = (
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
        d="M41.708 25.794 24.058 8.086 6.294 25.792a1 1 0 1 0 1.412 1.416L11 23.925V39a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V23.904l3.292 3.302a1 1 0 1 0 1.416-1.412Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHomeAlt);
export default ForwardRef;

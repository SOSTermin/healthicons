import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgQuestion = (
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
        d="M25.8 27.869a1 1 0 0 0-.8.98V31a1.5 1.5 0 0 1-3 0v-4.322a1.5 1.5 0 0 1 1.395-1.496c1.778-.124 4.393-.73 6.515-2.083 2.071-1.322 3.59-3.285 3.59-6.254 0-2.86-1.061-4.843-2.602-6.158-1.578-1.347-3.774-2.085-6.132-2.177-4.881-.191-9.43 2.31-10.302 6.204a1.5 1.5 0 0 1-2.928-.655c.666-2.974 2.587-5.151 5.074-6.576 2.5-1.433 5.531-2.078 8.274-1.97 2.868.112 5.76 1.013 7.962 2.892 2.24 1.912 3.654 4.744 3.654 8.44 0 4.238-2.27 7.056-4.976 8.783-1.832 1.169-3.9 1.87-5.723 2.24ZM21 40a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        fill={props.color}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgQuestion);
export default ForwardRef;

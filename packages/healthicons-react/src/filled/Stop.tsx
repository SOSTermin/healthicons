import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgStop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M30 25.14V12.5a1.5 1.5 0 1 0-3 0V23h-2V9.5a1.5 1.5 0 1 0-3 0V23h-2V12.5a1.5 1.5 0 1 0-3 0V25h-2v-8.5a1.5 1.5 0 1 0-3 0v13.238a10.263 10.263 0 0 0 19.324 4.818l5.906-11.107a1.812 1.812 0 0 0-3.184-1.731l-2.172 3.909c-.5.902-1.874.546-1.874-.486Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4Zm18.095 20c0-9.994-8.101-18.095-18.095-18.095-9.994 0-18.095 8.101-18.095 18.095 0 9.994 8.101 18.095 18.095 18.095 9.994 0 18.095-8.101 18.095-18.095Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStop);
export default ForwardRef;

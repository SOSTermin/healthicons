import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgN = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M11 36V12a3 3 0 0 1 5.305-1.92L31 27.713V12a3 3 0 0 1 6 0v24a3 3 0 0 1-5.305 1.92L17 20.286V36a3 3 0 1 1-6 0Zm2-24v24a1 1 0 1 0 2 0V17.524a1 1 0 0 1 1.768-.64L33.232 36.64A1 1 0 0 0 35 36V12a1 1 0 0 0-2 0v18.476a1 1 0 0 1-1.768.64L14.768 11.36l.768-.64-.768.64A1 1 0 0 0 13 12Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgN);
export default ForwardRef;

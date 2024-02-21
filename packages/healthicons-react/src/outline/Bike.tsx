import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBike = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M35.745 12.17 30.82 13.65l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A.998.998 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157 8.127-4.277-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787.575 1.915Zm-13.662 9.89 1.972 5.52 4.23-8.784-6.202 3.264Zm12.983 8.297-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714ZM17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBike);
export default ForwardRef;

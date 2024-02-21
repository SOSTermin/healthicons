import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const Svg2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M26 14a4 4 0 0 1 2.61 7.034l-14 13.528A2 2 0 0 0 16 38h16a2 2 0 1 0 0-4H20.948l10.416-10.065A8 8 0 0 0 26 10h-4a8.003 8.003 0 0 0-7.544 5.334 2 2 0 0 0 3.771 1.332A4.002 4.002 0 0 1 22 14h4Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg2);
export default ForwardRef;

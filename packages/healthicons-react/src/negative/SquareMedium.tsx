import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSquareMedium = (
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
      <g clipPath="url(#square_medium_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm10 9a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H10Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="square_medium_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSquareMedium);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUiSecure = (
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
      <g clipPath="url(#ui_secure_svg__a)" fill={props.color}>
        <path d="M18 18h12v-2a6 6 0 0 0-12 0v2ZM15 26h18v-2H15v2ZM33 31H15v-2h18v2ZM15 36h18v-2H15v2Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm11 18a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2h-3v-2c0-5.523-4.477-10-10-10s-10 4.477-10 10v2h-3Z"
        />
      </g>
      <defs>
        <clipPath id="ui_secure_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiSecure);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgICertificatePaper = (
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
      <g clipPath="url(#i_certificate_paper_svg__a)" fill={props.color}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 40h-4v-3.535a4 4 0 1 1 4 0V40Zm-2-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
        <path d="M18 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1ZM15 16a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15ZM14 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM15 24a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm10 7v30a3 3 0 0 0 3 3h13v4l2-1.5 2 1.5v-4h5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3Z"
        />
      </g>
      <defs>
        <clipPath id="i_certificate_paper_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgICertificatePaper);
export default ForwardRef;

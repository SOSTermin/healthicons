import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgHealthWorkerForm = (
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
      <g clipPath="url(#health_worker_form_svg__a)" fill={props.color}>
        <path d="M20 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8ZM16 20a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7ZM15 16a1 1 0 0 1 1-1h15.5a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 28a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Zm2 3v-2h2v2h-2Z"
        />
        <path d="M28 32a3 3 0 1 0 0-6 3 3 0 1 0 0 6ZM22 36.5c0-2.116 3.997-3.182 6-3.182s6 1.066 6 3.182V39H22v-2.5Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h4a3 3 0 0 1 3 3v31a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h4Z"
        />
      </g>
      <defs>
        <clipPath id="health_worker_form_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHealthWorkerForm);
export default ForwardRef;

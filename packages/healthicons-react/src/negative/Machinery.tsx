import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMachinery = (
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
      <g clipPath="url(#machinery_svg__a)" fill={props.color}>
        <path d="M31.033 16.762a.48.48 0 0 1 .5.453l.449 6.518a.25.25 0 0 1-.25.267H30.62c-.395 0-.787.064-1.158.189l-5.805 1.402a.5.5 0 0 1-.616-.516l.035-.579c.263-4.348 3.69-7.518 7.957-7.734ZM23.5 39a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM31 37.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM35.5 39a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9.488 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.603.196a4.48 4.48 0 0 0 .853-3.329c3.572.844 6.992 1.993 9.341 4.665.104.117.07.299-.065.378a14.05 14.05 0 0 0-2.745 2.1.26.26 0 0 1-.374-.012c-1.74-1.89-4.379-2.95-7.01-3.802ZM9.488 13c.427 0 .84-.06 1.232-.17L9.101 23.551a.25.25 0 0 0 .218.285l1.73.206 2.666.174c.026.001.051-.001.076-.007l1.774-.431a.25.25 0 0 1 .275.368l-2.196 3.806a4 4 0 0 1-3.937 1.973l-.18-.022a4 4 0 0 1-3.525-4.113l.082-2.338.976-11.163c.7.45 1.533.71 2.427.71Zm9.632 11.334C19.474 17.975 24.733 13 31.102 13h1.907a2 2 0 0 1 1.98 1.725l1.005 7.232a.05.05 0 0 0 .05.043h3.826a1.5 1.5 0 0 1 1.495 1.375l.59 7.084a.5.5 0 0 1-.498.541h-21.65a1 1 0 0 1-.998-1.055l.311-5.61ZM21.5 33a4.5 4.5 0 1 0 0 9h16a4.5 4.5 0 1 0 0-9h-16Z"
        />
      </g>
      <defs>
        <clipPath id="machinery_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMachinery);
export default ForwardRef;

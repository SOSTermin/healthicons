import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgOverweight = (
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
      <g clipPath="url(#overweight_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM28.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm9.42 11.06a2 2 0 0 0-1.36-2.48c-4.792-1.397-8.652-2.097-12.57-2.08-3.91.018-7.76.75-12.525 2.073a2 2 0 1 0 1.07 3.854 82.477 82.477 0 0 1 3.11-.804l-.036.115c-1.432 4.464-2.89 9.005.301 12.79l2.14 9.415A2 2 0 0 0 22 42v-6.035c.642.035 1.306.035 2 .035.876 0 1.704 0 2.5-.07V42a2 2 0 0 0 3.95.443l2.367-10.414c2.211-3.572.882-7.714-.426-11.79l-.048-.15c.978.237 2.006.513 3.097.831a2 2 0 0 0 2.48-1.36Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="overweight_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOverweight);
export default ForwardRef;

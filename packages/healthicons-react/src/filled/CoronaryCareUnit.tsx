import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCoronaryCareUnit = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm6.19 11.276c0-4.294 2.78-8.276 6.59-8.276 2.643 0 4.604 1.787 5.815 4.32 1.21-2.533 3.171-4.32 5.815-4.32 3.809 0 6.59 3.982 6.59 8.276C37 29.466 24.595 36 24.595 36s-8.265-4.09-11.303-10.805h3.774l1.674-2.927L20.696 29l4.58-5.79h4.685A1.03 1.03 0 0 0 31 22.187a1.03 1.03 0 0 0-1.039-1.022H24.26l-2.691 3.403-2.2-7.569-3.518 6.152h-3.287c-.24-.92-.375-1.879-.375-2.876Zm.364 2.876H10v2.043h3.285l-.73-2.043Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCoronaryCareUnit);
export default ForwardRef;

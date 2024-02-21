import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPills4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M22 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-3.39-.325a2 2 0 1 0-2.209-3.334l-6.012 3.984a2 2 0 1 0 2.21 3.335l6.012-3.985ZM41 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-6.874-4.076a2 2 0 1 0-3.752 1.387l2.5 6.765a2 2 0 1 0 3.752-1.387l-2.5-6.765ZM22 33.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-7.956 4.099a2 2 0 0 0 3.691-1.541l-2.779-6.656a2 2 0 1 0-3.691 1.54l2.779 6.657ZM41 33.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-3.463-.84a2 2 0 0 0-2.612-3.03l-5.462 4.71a2 2 0 0 0 2.612 3.03l5.462-4.71Z"
        fill={props.color}
        stroke={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPills4);
export default ForwardRef;

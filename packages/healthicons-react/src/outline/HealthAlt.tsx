import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgHealthAlt = (
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
      <path d="M14 22h8v-8h4v8h8v4h-8v8h-4v-8h-8v-4Z" fill={props.color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm31 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHealthAlt);
export default ForwardRef;

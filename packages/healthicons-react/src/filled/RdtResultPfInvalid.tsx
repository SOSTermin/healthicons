import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRdtResultPfInvalid = (
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
        d="M11.593 11.026a1.207 1.207 0 0 0-.742.079 1.384 1.384 0 0 0-.609.537A1.621 1.621 0 0 0 10 12.5c0 .31.087.61.242.858.156.248.37.432.609.537.237.105.494.131.742.079.248-.053.485-.185.677-.39a1 1 0 0 1 1.46 1.368 3.3 3.3 0 0 1-1.722.978 3.208 3.208 0 0 1-1.966-.206 3.383 3.383 0 0 1-1.495-1.304A3.62 3.62 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.383 3.383 0 0 1 1.495-1.304 3.207 3.207 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368 1.302 1.302 0 0 0-.677-.39ZM22 23H11a1 1 0 1 0 0 2h11v-2ZM24 25h2a1 1 0 1 0 0-2h-2v2Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12H10Zm28-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3ZM14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H14Zm3 2.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5ZM27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0v-5Zm4 1.5a.5.5 0 0 0-.5-.5H29v1h1.5a.5.5 0 0 0 .5-.5Z"
        fill={props.color}
      />
      <path
        d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503.564-1.503a1 1 0 1 1 1.872.702l-1.5 4ZM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2 1 1 0 0 1 0 2v2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRdtResultPfInvalid);
export default ForwardRef;

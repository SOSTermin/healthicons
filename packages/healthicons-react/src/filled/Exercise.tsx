import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgExercise = (
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
        d="M32 14h4v20h-4v-9H16v9h-4V14h4v9h16v-9ZM6 23v-6h4v14H6v-6H4v-2h2Zm38 2h-2v6h-4V17h4v6h2v2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgExercise);
export default ForwardRef;

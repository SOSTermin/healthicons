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
      <g clipPath="url(#exercise_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM36 14h-4v9H16v-9h-4v20h4v-9h16v9h4V14ZM6 17v6H4v2h2v6h4V17H6Zm36 8h2v-2h-2v-6h-4v14h4v-6Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="exercise_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgExercise);
export default ForwardRef;

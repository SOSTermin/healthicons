import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgQuestionMark = (
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
      <g clipPath="url(#question_mark_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 14c2.222.017 4 1.811 4 4 0 2.2-1.795 4-4.032 4a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-4.25C29.43 24.865 32 21.738 32 18c0-4.386-3.537-7.931-7.904-7.999L24.032 10h-.064l-.064.001C19.537 10.069 16 13.614 16 18a2 2 0 1 0 4 0c0-2.189 1.778-3.983 4-4Zm0 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="question_mark_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgQuestionMark);
export default ForwardRef;

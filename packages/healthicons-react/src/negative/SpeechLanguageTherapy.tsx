import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSpeechLanguageTherapy = (
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
      <g clipPath="url(#speech_language_therapy_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm1.658 4.032c.256-.021.515-.032.776-.032 5.147 0 9.319 4.136 9.319 9.237v1.206l2.004 2.98c.635.944-.048 2.209-1.193 2.209h-.811v1.42c0 .393-.321.711-.717.711h-.907c-.71-.006-1.3-.01-1.3.71l2.207.711c.396 0 .717.318.717.71v2.132a2.836 2.836 0 0 1-1.375 2.427c-.512.31-1.063.351-1.548.288-.477-.062-.933-.23-1.309-.39l-2.937-1.247v5.185c0 .393-.32.711-.717.711h-2.15a.714.714 0 0 1-.717-.71V10.74c0-.37.286-.678.658-.708Zm6.869 12.047a1.07 1.07 0 0 0 1.075-1.066 1.07 1.07 0 0 0-1.075-1.066 1.07 1.07 0 0 0-1.075 1.066 1.07 1.07 0 0 0 1.075 1.066Zm7.968 8.005A2.408 2.408 0 0 0 26.686 28c0-.893-.48-1.67-1.19-2.084l1.01-1.727A4.408 4.408 0 0 1 28.684 28a4.408 4.408 0 0 1-2.18 3.81l-1.01-1.726Zm3.287-6.747c1.213.877 2.113 2.596 2.113 4.663s-.9 3.786-2.113 4.663l1.173 1.62c1.807-1.307 2.94-3.672 2.94-6.283 0-2.61-1.133-4.976-2.94-6.284l-1.173 1.62Zm3.333 11.88c1.726-1.369 2.99-4.036 2.99-7.217s-1.264-5.848-2.99-7.216l1.243-1.567c2.302 1.825 3.747 5.128 3.747 8.783 0 3.655-1.445 6.958-3.747 8.783l-1.242-1.566Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="speech_language_therapy_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSpeechLanguageTherapy);
export default ForwardRef;

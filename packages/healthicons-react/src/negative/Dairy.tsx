import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgDairy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#dairy_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 23.814C26.333 26 31 26 31 26v14.522c0 .913-.68 1.478-1.306 1.478H19.306C18.679 42 18 41.435 18 40.522V23.424c1.502-.509 4.34-1.165 6 .39ZM19.306 7.339 16 21.391v19.13C16 42.444 17.48 44 19.306 44h10.388C31.52 44 33 42.443 33 40.522v-19.13L29.694 7.338s.53.045.99-.232c.353-.213.663-.614.663-1.368C31.347 4 30.521 4 28.042 4h-7.084c-2.479 0-3.305 0-3.305 1.74 0 .753.31 1.154.662 1.366.46.278.99.233.99.233Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="dairy_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDairy);
export default ForwardRef;

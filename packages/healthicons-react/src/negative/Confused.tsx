import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgConfused = (
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
      <g
        clipPath="url(#confused_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.color}
      >
        <path d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-22.5 2c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4Zm13 0c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4Zm-9.224 8.55.044-.036c1.24-1.005 2.177-1.763 3.627-2.155 1.478-.4 3.601-.44 7.193.346a1 1 0 0 0 .428-1.954c-3.735-.817-6.222-.843-8.143-.323-1.864.504-3.091 1.5-4.275 2.46l-.133.107a1 1 0 1 0 1.259 1.555Z" />
        <path d="M48 0H0v48h48V0Zm-6 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" />
      </g>
      <defs>
        <clipPath id="confused_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgConfused);
export default ForwardRef;

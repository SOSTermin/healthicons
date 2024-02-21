import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgStarLarge = (
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
      <g clipPath="url(#star_large_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.903 7.064a1.005 1.005 0 0 0-1.806 0L18.315 16.8c-.147.298-.43.505-.759.553L6.864 18.914c-.826.121-1.156 1.141-.558 1.726l7.738 7.579c.237.232.346.567.29.895l-1.827 10.7c-.141.827.722 1.458 1.461 1.068l9.564-5.053c.294-.155.644-.155.938 0l9.564 5.053c.739.39 1.602-.24 1.461-1.067l-1.827-10.7a1.015 1.015 0 0 1 .29-.896l7.738-7.579c.597-.585.268-1.605-.558-1.726l-10.694-1.56a1.008 1.008 0 0 1-.758-.554l-4.782-9.736Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="star_large_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStarLarge);
export default ForwardRef;

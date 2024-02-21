import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgChartBarStacked = (
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
      <g clipPath="url(#chart_bar_stacked_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm8 40V7H6v34a1 1 0 0 0 1 1h34v-2h-2V13a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v27h-2V21a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v19h-2V25a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v15H8Zm29-16h-4V14h4v10Zm-14-2h4v6h-4v-6Zm-6 10h-4v-6h4v6Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="chart_bar_stacked_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartBarStacked);
export default ForwardRef;

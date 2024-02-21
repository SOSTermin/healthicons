import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgOdontologyImplant = (
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
        d="M39.578 9.134c-4.61-4.856-10.98-2.675-14.14-1.105l6.086 4.43a1 1 0 0 1-1.177 1.617L23.53 9.113l-.03.02c-6.18-4.81-11.548-3.78-15.91 1.032-2.715 2.994-1.418 7.038-.05 11.301.83 2.588 1.685 5.256 1.685 7.82.213.47 2.356.848 5.383 1.105a1.986 1.986 0 0 0-.043 1.059l.03.13 2.781-1.001c1.706.091 3.555.15 5.42.174l-7.748 2.79.4 1.73 12.65-4.554c5.011-.137 9.18-.587 9.662-1.433 0-2.214 1.015-4.537 2.051-6.91 1.907-4.365 3.888-8.9-.233-13.242ZM33.095 32.92 16.3 38.966l-.4-1.73 17.585-6.33a2.01 2.01 0 0 1-.05.544l-.34 1.47ZM17.013 40.835l15.547-5.597-.471 2.044-13.05 4.698a3.001 3.001 0 0 1-2.026-1.145ZM24.889 42h3.724a3 3 0 0 0 2.924-2.325l.017-.074L24.889 42Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOdontologyImplant);
export default ForwardRef;

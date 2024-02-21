import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgGeoLocation = (
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
        d="M23.424 41.817 24 41l-.576.817Zm1.152 0 .004-.002.01-.007.03-.023.118-.085c.1-.074.246-.182.43-.324.368-.282.89-.697 1.513-1.23a43.403 43.403 0 0 0 4.575-4.54C34.564 31.78 38 26.319 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.962 13.962 0 0 0 24 6a13.962 13.962 0 0 0-9.902 4.125A14.117 14.117 0 0 0 10 20.077c0 6.242 3.436 11.703 6.744 15.529a43.403 43.403 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a25.536 25.536 0 0 0 .547.41l.032.022.009.007.004.002c.345.243.807.243 1.152 0ZM24 41l.576.817L24 41Zm5-21a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGeoLocation);
export default ForwardRef;

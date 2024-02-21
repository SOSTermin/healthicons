import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCoins = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M37.972 27.975A12.939 12.939 0 0 0 40 21c0-7.18-5.82-13-13-13-2.567 0-4.96.744-6.975 2.027a16.953 16.953 0 0 0-3.954.698A14.958 14.958 0 0 1 27 6c8.284 0 15 6.716 15 15 0 4.308-1.816 8.193-4.725 10.929.381-1.263.62-2.587.697-3.954Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.933 28.603a15.065 15.065 0 0 1-2.658 3.326c.381-1.263.62-2.587.697-3.954A12.939 12.939 0 0 0 40 21V21c0-7.18-5.82-13-13-13-2.567 0-4.96.744-6.975 2.027a16.953 16.953 0 0 0-3.954.698 15.067 15.067 0 0 1 3.326-2.658A14.93 14.93 0 0 1 27 6c8.284 0 15 6.716 15 15a14.92 14.92 0 0 1-2.067 7.603Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 27c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15Zm-16-5a2 2 0 1 0 0 4v-4Zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 20 34v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4.001 4.001 0 0 0 22 20Zm0 8v4a2 2 0 1 0 0-4Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCoins);
export default ForwardRef;

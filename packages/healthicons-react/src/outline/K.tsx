import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgK = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M13 36V12a3 3 0 1 1 6 0v8.757L29.879 9.88a3 3 0 1 1 4.242 4.242L24.243 24l9.878 9.879a3 3 0 0 1 0 4.242l-.706-.706.706.706a3 3 0 0 1-4.242 0L20 28.243l-1 1V36a3 3 0 1 1-6 0Zm2-24v24a1 1 0 1 0 2 0v-7.172a1 1 0 0 1 .293-.707l2-2a1 1 0 0 1 1.414 0l10.586 10.586a1 1 0 0 0 1.414-1.414L22.121 24.707a1 1 0 0 1 0-1.414l10.586-10.586a1 1 0 0 0-1.414-1.414L18.707 23.879A1 1 0 0 1 17 23.172V12a1 1 0 1 0-2 0Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgK);
export default ForwardRef;

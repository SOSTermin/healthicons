import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgOncology = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill={props.color}
      />
      <path
        d="m19.28 27.133 4.02 5.196-4.02 5.133-5.073-3.896 5.072-6.433ZM16.929 14.453l2.165-2.845c.804-.99 1.979-1.608 3.216-1.608h3.587c.619 0 1.237.124 1.794.433.557.247 1.052.68 1.423 1.175l2.226 2.907c1.732 2.289 1.732 5.443 0 7.67l-2.35 2.969-4.02-5.196 2.474-2.154s-.062 0-.062-.062a2.873 2.873 0 0 0-1.423-.371h-3.65c-.494 0-.989.185-1.422.433l2.474 2.154 5.814 7.423L34 33.566l-5.01 3.896-12.061-15.339c-1.732-2.227-1.732-5.381 0-7.67Zm3.03 1.176c.062.061.062.123.124.185.124-.124.31-.185.495-.247.557-.248 1.175-.433 1.794-.433h3.587c.619 0 1.237.123 1.794.433.124.062.31.185.433.247.433-.618.68-.484.495-1.227a2.489 2.489 0 0 0-.557-1.237 3.147 3.147 0 0 0-.99-.804 2.815 2.815 0 0 0-1.237-.309H22.31c-.866 0-1.67.433-2.227 1.113-.68.928-.804 1.289-.123 2.279Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOncology);
export default ForwardRef;

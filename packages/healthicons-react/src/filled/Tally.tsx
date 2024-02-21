import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTally = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M24.157 44c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20ZM17 14a1 1 0 0 0-1 1v.723l-2.468-2.107-1.299 1.522L16 18.353V33a1 1 0 1 0 2 0V20.06l3 2.56V33a1 1 0 1 0 2 0v-8.673l3 2.56V33a1 1 0 1 0 2 0v-4.405l3 2.56V33a1 1 0 1 0 2 0v-.138l1.82 1.554 1.3-1.52L33 30.232V15a1 1 0 1 0-2 0v13.526l-3-2.56V15a1 1 0 1 0-2 0v9.258l-3-2.56V15a1 1 0 1 0-2 0v4.99l-3-2.56V15a1 1 0 0 0-1-1Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTally);
export default ForwardRef;

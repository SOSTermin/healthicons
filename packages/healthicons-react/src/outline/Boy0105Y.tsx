import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBoy0105Y = (
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
        d="M34.468 20.948a1 1 0 0 0-1.22-.716c-3.662.954-6.466 1.394-9.244 1.383-2.782-.012-5.59-.475-9.263-1.385a1 1 0 1 0-.482 1.94c2.162.536 4.068.93 5.873 1.17l.868.116v5.481l-.992 7.939a1 1 0 0 0 1.975.308l1.5-8a1 1 0 0 0 .017-.18h2a1 1 0 0 0 .017.18l1.5 8a1 1 0 0 0 1.975-.308L28 28.938v-5.58l.844-.134c1.518-.24 3.126-.592 4.908-1.056a1 1 0 0 0 .716-1.22Zm-1.724-2.651a3 3 0 0 1 1.512 5.806 56.882 56.882 0 0 1-4.256.954v3.756l.977 7.815a3 3 0 0 1-5.926.925l-.551-2.94-.551 2.94a3 3 0 0 1-5.926-.925L19 28.813v-3.615c-1.64-.256-3.352-.622-5.222-1.086a3 3 0 0 1 1.444-5.824c3.602.893 6.235 1.316 8.79 1.326 2.546.01 5.167-.389 8.732-1.317Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBoy0105Y);
export default ForwardRef;

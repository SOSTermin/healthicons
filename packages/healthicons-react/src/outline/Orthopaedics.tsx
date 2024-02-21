import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgOrthopaedics = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.417 10.98a.982.982 0 0 0-1.167.958.968.968 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.006a.989.989 0 0 0 .746-.962v-.387a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966.981.981 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003Zm2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0v-2.24ZM18.417 19.98a.982.982 0 0 0-1.167.958.968.968 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.006a.989.989 0 0 0 .746-.962v-.387a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966.981.981 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003Zm2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0v-2.24ZM18.417 28.98a.982.982 0 0 0-1.167.958.968.968 0 0 1-.968.967H16a1 1 0 0 0-1 1v.874a1 1 0 0 0 1 1h.25a1 1 0 0 1 1 1v.378a.99.99 0 0 0 .756.965c4.67 1.121 7.533 1.122 11.998.005a.989.989 0 0 0 .746-.96v-.388a1 1 0 0 1 1-1H32a1 1 0 0 0 1-1v-.874a1 1 0 0 0-1-1h-.284a.966.966 0 0 1-.966-.966.981.981 0 0 0-1.168-.956c-4.192.79-6.974.781-11.165-.003Zm2.083 2.758a1 1 0 1 0-2 0v2.24a1 1 0 1 0 2 0v-2.24Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOrthopaedics);
export default ForwardRef;

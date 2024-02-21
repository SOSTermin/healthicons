import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgProviderFst = (
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
      <g clipPath="url(#provider_fst_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm25 25a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-9Zm-4.793-5.207 3.184 3.184-1.414 1.414-3.184-3.184 1.414-1.414Zm-1.553-1.553-3.977-3.977h4.218v-2h-7.632v7.632h2v-4.218l3.977 3.977 1.415-1.414Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="provider_fst_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgProviderFst);
export default ForwardRef;

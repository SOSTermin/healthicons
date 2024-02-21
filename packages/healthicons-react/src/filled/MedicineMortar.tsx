import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMedicineMortar = (
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
        d="M38.014 7.265a3 3 0 0 0-4.02.97L27.685 18h8.248l3.42-6.671a3 3 0 0 0-1.17-3.967l-.17-.097Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 22h-2v3c0 5.784-3.778 10.686-9 12.373V41a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-3.627C10.777 35.686 7 30.784 7 25v-3H5v-2h38v2ZM18 38v2h12v-2H18Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicineMortar);
export default ForwardRef;

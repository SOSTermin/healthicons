import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgThermometer = (
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
        d="m18.983 29.739-.002-1.779-.005-6.211-.01-12.407c-.002-2.96 2.234-5.36 4.996-5.362 2.761-.002 5.002 2.395 5.004 5.353l.01 12.408.005 6.212.002 1.778a8 8 0 1 1-10 .008Zm3.975-8.337c1.196.31 2.562.662 4.019.637l-.002-2.085-2 .001a1 1 0 0 1-.002-2l2-.001-.001-2-2 .001a1 1 0 1 1-.002-2l2-.001-.002-2-2 .001a1 1 0 0 1-.001-2l2-.001v-.62c-.002-1.774-1.347-3.212-3.003-3.21-1.657 0-3 1.44-2.998 3.216l.01 11.641c.585.06 1.252.233 1.982.421Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgThermometer);
export default ForwardRef;

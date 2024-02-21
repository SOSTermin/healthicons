import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgContraceptiveVoucher = (
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
        d="m21.346 25.674-1.918-1.919a2.957 2.957 0 0 0-.149 1.854l.68 2.953c.21.907-.827 1.583-1.573 1.025l-.485-.363c-2.184-1.634-5.239.258-4.749 2.94l.26 1.42 1.967-.36-.26-1.419c-.163-.894.856-1.525 1.584-.98l.485.363c2.238 1.675 5.349-.352 4.72-3.076l-.562-2.438Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.634 25.476A2.948 2.948 0 0 0 30 23.553l-.294-2.13c1.25.106 2.664-.418 3.763-1.517 1.76-1.758 2.044-4.324.637-5.731s-3.973-1.122-5.731.637c-1.669 1.668-2.011 4.063-.84 5.506l.484 3.509.005.038 1.61 1.61Zm.155-9.25c1.288-1.287 2.555-.984 2.903-.636.348.348.652 1.615-.637 2.903-1.288 1.289-2.555.985-2.903.637-.348-.348-.652-1.615.637-2.903Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 24c0 10.493-8.507 19-19 19S5 34.493 5 24 13.507 5 24 5s19 8.507 19 19Zm-7.707 12.707A16.936 16.936 0 0 1 24 41c-9.389 0-17-7.611-17-17 0-4.335 1.622-8.29 4.293-11.293l24 24Zm1.414-1.414-24-24A16.936 16.936 0 0 1 24 7c9.389 0 17 7.611 17 17 0 4.335-1.622 8.29-4.293 11.293Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContraceptiveVoucher);
export default ForwardRef;

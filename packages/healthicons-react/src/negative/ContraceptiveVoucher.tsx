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
      <g
        clipPath="url(#contraceptive_voucher_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.color}
      >
        <path d="M35.293 36.707A16.936 16.936 0 0 1 24 41c-9.389 0-17-7.611-17-17 0-4.335 1.622-8.29 4.293-11.293l24 24ZM19.14 25.474a2.956 2.956 0 0 1 .154-1.865l1.909 1.909.654 2.835c.628 2.724-2.483 4.75-4.721 3.076l-.715-.535c-.728-.544-1.746.086-1.583.98l.29 1.584-1.968.36-.289-1.584c-.49-2.683 2.565-4.575 4.748-2.941l.715.535c.746.558 1.783-.118 1.574-1.026l-.768-3.328ZM36.707 35.293l-24-24A16.936 16.936 0 0 1 24 7c9.389 0 17 7.611 17 17 0 4.335-1.622 8.29-4.293 11.293ZM34.36 13.917c-1.443-1.443-4.075-1.15-5.878.653-1.804 1.803-2.096 4.435-.654 5.878l.023.023.432 3.613.003.032 1.604 1.604c.31-.525.463-1.163.378-1.873l-.296-2.487c1.25.064 2.644-.474 3.735-1.565 1.804-1.804 2.096-4.435.653-5.878Z" />
        <path d="M0 0h48v48H0V0Zm43 24c0 10.493-8.507 19-19 19S5 34.493 5 24 13.507 5 24 5s19 8.507 19 19Z" />
      </g>
      <defs>
        <clipPath id="contraceptive_voucher_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContraceptiveVoucher);
export default ForwardRef;

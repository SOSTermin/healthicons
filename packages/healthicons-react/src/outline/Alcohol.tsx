import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgAlcohol = (
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
        d="M18 6h-2v11.215a2.75 2.75 0 0 1-.694 1.827A13.087 13.087 0 0 0 12 27.736v13.721c0 .3.243.543.543.543h8.914c.3 0 .543-.243.543-.543V27.736c0-3.205-1.176-6.299-3.305-8.694A2.75 2.75 0 0 1 18 17.215V6Zm0-2a2 2 0 0 1 2 2v11.215c0 .184.067.36.19.498A15.086 15.086 0 0 1 24 27.736v13.721A2.543 2.543 0 0 1 21.457 44h-8.914A2.543 2.543 0 0 1 10 41.457V27.736c0-3.695 1.356-7.261 3.81-10.023a.75.75 0 0 0 .19-.498V6a2 2 0 0 1 2-2h2Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 30H12v6h10v-6Zm-12-2v10h14V28H10ZM28.999 18l-.823 7.748a3.846 3.846 0 1 0 7.648 0L35.001 18H29Zm7.801-2h-9.6l-1.013 9.536a5.846 5.846 0 1 0 11.626 0L36.8 16Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 43V31h2v12h-2Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 43a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1ZM36.5 26h-9v-2h9v2Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlcohol);
export default ForwardRef;

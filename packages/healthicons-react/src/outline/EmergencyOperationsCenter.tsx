import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEmergencyOperationsCenter = (
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
      <path d="M19 32h5v4h-5v-4ZM17 32h-5v4h5v-4Z" fill={props.color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10a1 1 0 0 0-1 1v1h-2a3 3 0 1 0 0 6h2v1h-4v2h4v3H6v2h2v14H7a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2h-1V26h2v-2H29v-1.97a7.009 7.009 0 0 0 8.506-2.18l-4.192-4.193.95-.95a1 1 0 0 0-1.415-1.414l-.95.95-4.192-4.193a7.057 7.057 0 0 0-1.414 1.414 7.006 7.006 0 0 0-.23 8.06L21.585 24H17v-3h4v-2h-4v-1h2a3 3 0 1 0 0-6h-2v-1a1 1 0 0 0-1-1Zm8.414 14H27v-2.586L24.414 24ZM15 14h-2a1 1 0 1 0 0 2h2v-2Zm2 0h2a1 1 0 1 1 0 2h-2v-2Zm-7 12v1h28v-1H10Zm24.657-6.171a5.002 5.002 0 0 1-6.93-6.93l6.93 6.93ZM10 29h28v11h-2v-8h-5v8H10V29Z"
        fill={props.color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEmergencyOperationsCenter);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgOfficer = (
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
      <g clipPath="url(#officer_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM23.356 33.457 16.879 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-6.477 5.457a1 1 0 0 1-1.288 0ZM19 35h-7v1.246a1 1 0 0 0 .725.961l2.5.715a1 1 0 0 0 .55 0l2.5-.715a1 1 0 0 0 .725-.961V35Zm14.336-1.875a.17.17 0 0 1 .328 0l.472 1.52c.023.075.09.126.165.126h1.526c.167 0 .237.225.101.328l-1.234.94a.186.186 0 0 0-.063.202l.471 1.52c.052.168-.13.307-.266.204l-1.234-.94a.166.166 0 0 0-.204 0l-1.234.94c-.136.103-.318-.036-.267-.203l.472-1.52a.186.186 0 0 0-.063-.203l-1.234-.94c-.136-.103-.066-.328.101-.328H32.7c.075 0 .142-.05.165-.125l.472-1.52ZM31.814 18.28C33.204 17.195 32.988 16 32.988 16H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0Zm-1.862.955a6 6 0 1 1-11.903 0c1.312.447 3.185.759 5.855.766h.192c2.67-.007 4.543-.32 5.856-.766ZM13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403Zm12.5-.53s-1.467-.534-2-1.067c-.533.533-2 1.067-2 1.067s.4 2.933 2 2.933 2-2.933 2-2.933Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="officer_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOfficer);
export default ForwardRef;

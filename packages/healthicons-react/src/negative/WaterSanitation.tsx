import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgWaterSanitation = (
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
      <g clipPath="url(#water_sanitation_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V30.001Zm11.705-.811c.932-.425 3.21 0 3.21 0l6.626 1.486s1.657.531 3.21.531.624 2.126-.415 2.868c-1.038.742-1.794.702-1.794.702l-5.35-.065s4.66.85 6.42.956c.891.054 2.42-.574 4.13-1.275 1.665-.684 3.5-1.437 5.084-1.699 3.21-.53 3.728 2.337 2.692 3.399-1.035 1.062-9.318 5.097-10.767 5.628-1.136.416-2.509.278-4.058.122-.429-.043-.872-.088-1.326-.122-1.81-.137-3.192-.577-4.56-1.012-1.468-.466-2.919-.927-4.862-1.006-.652-.026-2.178.055-2.945.1V30.94c1.326-.472 4.011-1.436 4.705-1.752ZM42 6H24a2 2 0 0 0-2 2v4h20V6Zm-19 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm3 4.172a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm4.121.12a1 1 0 0 0-1.414 1.415l1.414 1.414a1 1 0 0 0 1.415-1.414l-1.415-1.414Zm-9.828 3a1 1 0 0 1 0-1.413l1.414-1.415a1 1 0 1 1 1.414 1.415l-1.414 1.414a1 1 0 0 1-1.414 0ZM27 24.173a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm5.207-2.38a1 1 0 0 1 1.414 0l1.414 1.415a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414ZM16.793 23.13a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.415l-1.414 1.415Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="water_sanitation_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWaterSanitation);
export default ForwardRef;

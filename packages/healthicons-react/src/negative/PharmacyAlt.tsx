import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPharmacyAlt = (
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
      <g clipPath="url(#pharmacy_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 .002H0v48h48v-48ZM16 42V32H6V16h10V6h16v10h10v16H32v10H16Zm7.87-25.497h2.63a1 1 0 0 0 0-2h-2.63c-.349 0-.755.057-1.15.25-1.424.695-2.23 1.897-2.673 3.068-.15.395-.261.795-.343 1.182h2.058c.045-.16.096-.318.155-.475.322-.852.845-1.57 1.68-1.978a.637.637 0 0 1 .274-.047Zm-6.733 4.488c-.15-.532.31-.988.863-.988h12c.552 0 1.013.456.863.988-.306 1.09-1.109 2.054-2.234 2.763.256.445.371.948.371 1.471 0 .963-.388 1.87-1.333 2.48-.672.433-1.565.675-2.667.761v5.537h3v2h-8v-2h3V28.512c-.593.016-1.087.058-1.47.17-.272.079-.39.167-.44.223-.03.035-.09.114-.09.345 0 .233.06.314.092.35.05.056.168.145.439.224a3.4 3.4 0 0 0 .469.098v2.013a5.951 5.951 0 0 1-1.03-.191c-.48-.14-.986-.38-1.374-.817C19.19 30.47 19 29.893 19 29.25s.19-1.219.597-1.675c.388-.436.895-.674 1.373-.814.613-.178 1.335-.233 2.03-.25v-1.559c-2.937-.3-5.286-1.902-5.863-3.961Zm9.446 5.032c-.283.183-.774.357-1.583.435v-1.506a9.187 9.187 0 0 0 1.771-.356c.165.157.229.348.229.63 0 .37-.112.601-.417.797Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="pharmacy_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPharmacyAlt);
export default ForwardRef;

import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgAnimalDonkey = (
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
      <g clipPath="url(#animal_donkey_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-6.151 25.857-1.103-1.815c-1.586-2.611-4.236-4.167-7.093-4.167H20.4l-4.568-5.013c-1.646-.261-2.307-1.92-3.053-3.788-.537-1.348-1.119-2.805-2.145-3.928a.43.43 0 0 0-.697.074c-.692 1.148-.58 5.716.343 6.729.166.182.363.3.564.42l.072.043a3.306 3.306 0 0 1-.099.079c-.095.074-.19.149-.261.254l-4.197 6.13a2.135 2.135 0 0 0-.168 2.068l.804 1.766c.304.667.928 1.093 1.609 1.093h1.744c.478 0 .933-.21 1.27-.58L14 21.916l2.8 7.836 1 6.707-1 2.707S15 38.5 15 41h4.971s.495-1.298.429-3c-.02-.524-.056.914-.093.34-.157-2.481-.33-5.19.664-6.03 2.187 2.423 4.529 2.19 6.88.69.394-.109.974-.508 1.598-.936 1.285-.883 2.754-1.892 3.151-.754.304.87.97 1.248 1.53 1.566.526.3.96.546.904 1.099 1.11 2.853-.023 2.402-.96 3.68-.384.526-.735 1.006-.884 1.512l-.014.015c-.029.014-.096.006-.188-.004-.45-.05-1.488-.165-1.488 1.822h5.1l2.256-7.025L36.6 23.95l.264.216c.801.65 1.527 1.241 2.634 3.062.395.656 1.1.384 1.71.148.138-.053.27-.104.393-.142.411-.309.523-.92.248-1.377Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="animal_donkey_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalDonkey);
export default ForwardRef;

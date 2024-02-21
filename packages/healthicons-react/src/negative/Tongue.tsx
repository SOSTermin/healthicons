import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTongue = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#tongue_svg__a)" fill={props.color}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 24c0 6.84-4.292 12.677-10.33 14.966.214-.616.33-1.277.33-1.966v-1.272c1.158-.655 2.429-2.379 3.4-3.917.793-1.258-.15-2.811-1.636-2.811H16.236c-1.487 0-2.429 1.553-1.635 2.81.97 1.54 2.241 3.263 3.399 3.918V37c0 .689.116 1.35.33 1.966C12.292 36.677 8 30.84 8 24c0-8.837 7.163-16 16-16s16 7.163 16 16Zm-9.5 2c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4ZM20 22c0 2.21-1.12 4-2.5 4S15 24.21 15 22s1.12-4 2.5-4 2.5 1.79 2.5 4Z"
        />
        <path d="M20 31v6a4 4 0 0 0 8 0v-6h-3v4a1 1 0 1 1-2 0v-4h-3Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-6 24c0 8.611-6.047 15.81-14.126 17.582A5.976 5.976 0 0 1 24 43a5.976 5.976 0 0 1-3.874-1.418C12.047 39.81 6 32.612 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18Z"
        />
      </g>
      <defs>
        <clipPath id="tongue_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTongue);
export default ForwardRef;

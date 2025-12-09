import { cn } from "@/lib/cn";
import React from "react";

const GlobeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <g clipPath="url(#clip0_294_643)">
        <path
          d="M6.50004 11.9163C9.49158 11.9163 11.9167 9.49122 11.9167 6.49967C11.9167 3.50813 9.49158 1.08301 6.50004 1.08301C3.5085 1.08301 1.08337 3.50813 1.08337 6.49967C1.08337 9.49122 3.5085 11.9163 6.50004 11.9163Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.08337 6.5H11.9167"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.50004 1.08301C7.8549 2.56628 8.62486 4.49119 8.66671 6.49967C8.62486 8.50816 7.8549 10.4331 6.50004 11.9163C5.14518 10.4331 4.37522 8.50816 4.33337 6.49967C4.37522 4.49119 5.14518 2.56628 6.50004 1.08301Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_294_643">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlobeIcon;

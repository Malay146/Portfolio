import { cn } from "@/lib/cn";
import React from "react";

const ThreejsIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <g clipPath="url(#clip0_287_86)">
        <path
          d="M6.74034 25.5L0.504883 0.5L25.501 7.6275L6.74034 25.5Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
        <path
          d="M12.9982 4.06445L16.1137 16.5682L3.62231 13.0035L12.9982 4.06445Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
        <path
          d="M9.89895 14.6994L8.35157 8.48793L14.5572 10.2522L9.89895 14.6994ZM6.80343 2.28418L8.35081 8.49543L2.14514 6.73118L6.80343 2.28418ZM19.2145 5.82493L20.7619 12.0364L14.556 10.2719L19.2145 5.82493ZM9.89945 14.7037L11.4468 20.9149L5.24116 19.1507L9.89945 14.7037Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_287_86">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ThreejsIcon;

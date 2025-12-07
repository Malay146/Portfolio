import { cn } from "@/lib/cn";
import React from "react";

const NextJSIcon = ({className} : {className?: string}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <g clipPath="url(#clip0_287_61)">
        <path
          d="M12.5 25C19.4035 25 25 19.4035 25 12.5C25 5.5965 19.4035 0 12.5 0C5.5965 0 0 5.5965 0 12.5C0 19.4035 5.5965 25 12.5 25Z"
          fill="white"
        />
        <path
          d="M20.765 21.8775L9.603 7.5H7.5V17.4958H9.1825V9.63625L19.4443 22.895C19.9067 22.5856 20.3479 22.2457 20.765 21.8775Z"
          fill="url(#paint0_linear_287_61)"
        />
        <path
          d="M17.639 7.5H15.9722V17.5H17.639V7.5Z"
          fill="url(#paint1_linear_287_61)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_287_61"
          x1="15.139"
          y1="16.1803"
          x2="20.0695"
          y2="22.2915"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_287_61"
          x1="16.8055"
          y1="7.5"
          x2="16.7777"
          y2="14.8438"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_287_61">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NextJSIcon;

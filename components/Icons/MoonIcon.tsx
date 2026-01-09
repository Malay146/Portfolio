import { cn } from "@/lib/cn";
import React from "react";

const MoonIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
    >
      <path
        d="M14.875 9.05958C14.7636 10.2653 14.3111 11.4144 13.5704 12.3723C12.8298 13.3302 11.8316 14.0574 10.6928 14.4688C9.55393 14.8802 8.32148 14.9587 7.13964 14.6951C5.9578 14.4316 4.87545 13.837 4.01923 12.9808C3.16302 12.1245 2.56837 11.0422 2.30484 9.86035C2.04132 8.67851 2.11983 7.44606 2.53119 6.30721C2.94255 5.16836 3.66975 4.17022 4.62768 3.42958C5.58562 2.68893 6.73468 2.23642 7.94041 2.125C7.23449 3.08002 6.8948 4.25669 6.98312 5.441C7.07144 6.62531 7.58189 7.73858 8.42165 8.57834C9.26141 9.4181 10.3747 9.92856 11.559 10.0169C12.7433 10.1052 13.92 9.7655 14.875 9.05958Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MoonIcon;

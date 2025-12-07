import { cn } from "@/lib/cn";
import React from "react";

const FirebaseIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M15.3513 9.02983L12.8513 11.3576L10.5303 6.67433L11.7293 3.98183C12.0323 3.44433 12.5278 3.43758 12.831 3.98183L15.3513 9.02983Z"
        fill="#FFA000"
      />
      <path
        d="M12.8523 11.3558L3.5 20.0546L10.5315 6.67383L12.8523 11.3558Z"
        fill="#F57F17"
      />
      <path
        d="M18.0928 5.46895C18.5408 5.0422 19.0017 5.1862 19.1185 5.7922L21.5497 19.9372L13.4855 24.7782C13.203 24.9365 12.453 24.9982 12.453 24.9982C12.453 24.9982 11.7707 24.9152 11.5095 24.7712L3.5 20.0545L18.0928 5.46895Z"
        fill="#FFCA28"
      />
      <path
        d="M10.5315 6.67401L3.5 20.0545L6.63375 0.497261C6.75125 -0.108989 7.09475 -0.170739 7.40475 0.366261L10.5315 6.67401Z"
        fill="#FFA000"
      />
    </svg>
  );
};

export default FirebaseIcon;

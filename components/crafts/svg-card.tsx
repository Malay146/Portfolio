"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { motion } from "motion/react";

// Configuration for box positions
const BOX_POSITIONS = [
  // Top row
  { top: "top-[8.5rem]", left: "left-1/2 -translate-x-1/2" },
  { top: "top-[8.5rem]", left: "left-[9.875rem]" },
  { top: "top-[8.5rem]", right: "right-[9.875rem]" },
  // Left column
  { top: "top-[9.75rem]", left: "left-[8.5rem]" },
  { top: "top-[11.75rem]", left: "left-[8.5rem]" },
  { top: "top-[13.75rem]", left: "left-[8.5rem]" },
  // Bottom row
  { top: "top-[15rem]", left: "left-1/2 -translate-x-1/2" },
  { top: "top-[15rem]", left: "left-[9.875rem]" },
  { top: "top-[15rem]", right: "right-[9.875rem]" },
  // Right column
  { top: "top-[9.75rem]", right: "right-[8.5rem]" },
  { top: "top-[11.75rem]", right: "right-[8.5rem]" },
  { top: "top-[13.75rem]", right: "right-[8.5rem]" },
];

const SVGCardPage = () => {
  return (
    <div 
    className="w-full flex items-center justify-center gap-4 relative scale-50 xs:scale-60 sm:scale-75 md:scale-85 lg:scale-95 xl:scale-100">

      <div className="size-100 bg-zinc-900 rounded-2xl border border-zinc-600 hover:border-zinc-500 transition-colors duration-300 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_16px_rgba(255,255,255,0.125),inset_0_0_24px_rgba(255,255,255,0.125),inset_0_0_32px_rgba(0,0,0,0.3)]">
        {/* Center Icon */}
        <div className="size-24 bg-zinc-800 flex items-center justify-center rounded-lg border border-blue-500,
         shadow-[0_0_12px_rgba(59,130,246,0.6),inset_5px_5px_12px_rgba(0,0,0,0.5),inset_-4px_-4px_12px_rgba(255,255,255,0.125)] ,
         drop-shadow-[0_0_12px_rgba(59,130,246,0.2)] relative z-50">
          <BoltIcon className="text-blue-500 animate-pulse" />
        </div>

        {/* Decorative Boxes */}
        {BOX_POSITIONS.map((position, index) => (
          <Box
            key={index}
            className={cn(position.top, position.left, position.right)}
          />
        ))}

        {/* Horizontal Lines */}
        <LineSVG />
        <LineSVG className="left-auto right-3 rotate-180" />
        <LineSVG className="left-auto top-25 rotate-90" />
        <LineSVG className="left-auto top-77 -rotate-90" />

        {/* Corner Lines - Top */}
        <TopSVG />
        <BottomSVG className="left-auto right-4 rotate-180 top-40" />
        <TopSVG className="rotate-90 left-40 top-26" />
        <BottomSVG className="left-auto right-40 top-26 rotate-90" />

        {/* Corner Lines - Bottom */}
        <BottomSVG />
        <TopSVG className="left-auto right-4 rotate-180 top-60" />
        <BottomSVG className="-rotate-90 left-40 top-77" />
        <TopSVG className="left-auto -rotate-90 right-40 top-77" />
      </div>
    </div>
  );
};

export default SVGCardPage;

const BoltIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-blue-500", className)}
    >
      <path
        d="M17.9999 0L18.0359 0.0019997L18.0679 0.00399987L18.2339 0.0139988L18.2559 0.0179987H18.2779L18.3539 0.035997L18.4579 0.051996L18.4899 0.0639951L18.5119 0.0659948L18.5699 0.0879929L18.6739 0.115991L18.7119 0.133989L18.7419 0.141989L18.7979 0.169987L18.8779 0.203984L18.9199 0.227982L18.9639 0.247981L19.0099 0.277978L19.0719 0.311975L19.1399 0.359972L19.1759 0.38197L19.2019 0.405968L19.2499 0.439966L19.3259 0.50796L19.3699 0.541957L19.3859 0.561956L19.4139 0.585954L19.4859 0.667948L19.5379 0.721944L19.5499 0.739942C19.7899 1.03392 19.9419 1.38389 19.9859 1.76586L19.9879 1.78986L19.9919 1.87185L19.9999 1.99984V13.9989H29.9996C30.3501 13.9988 30.6945 14.0908 30.9982 14.2658C31.3019 14.4407 31.5544 14.6924 31.7302 14.9956C31.906 15.2988 31.9991 15.6429 32 15.9934C32.0009 16.3439 31.9097 16.6885 31.7355 16.9927L31.6155 17.1747L15.616 39.1729C14.48 40.7388 12.0001 39.9329 12.0001 37.997V25.998H2.00044C1.64992 25.998 1.30553 25.906 1.00179 25.7311C0.69805 25.5562 0.445621 25.3045 0.269799 25.0013C0.093977 24.698 0.000938682 24.3539 7.06581e-06 24.0034C-0.00092455 23.6529 0.0902834 23.3083 0.264491 23.0042L0.384487 22.8222L16.384 0.823935L16.404 0.797937L16.44 0.749941L16.506 0.673947L16.542 0.629951L16.56 0.613952L16.586 0.585954L16.666 0.51396L16.722 0.461964L16.738 0.449965C16.9724 0.258142 17.2473 0.122063 17.542 0.051996L17.564 0.0499963L17.6179 0.0399968L17.7659 0.0139988L17.7879 0.0119991L17.8699 0.00799927L17.9999 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

const LineSVG = ({ className }: { className?: string }) => {
  const LINE_ANIMATION = {
    initial: { strokeDashoffset: -380, strokeDasharray: "35 380" },
    animate: { strokeDashoffset: 100 },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: [0.42, 0, 0.58, 1] as any,
    },
  } as const;

  const basePath = "M138 1C123.669 1 40.0288 1 0 1";

  return (
    <>
      {/* Animated line */}
      <motion.svg
        width="150"
        height="2"
        viewBox="0 0 138 2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute top-1/2 left-3 -translate-y-1/2 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] z-20",
          className
        )}
      >
        <motion.path
          d={basePath}
          stroke="currentColor"
          strokeWidth="2"
          {...LINE_ANIMATION}
        />
      </motion.svg>

      {/* Static background line */}
      <svg
        width="150"
        height="2"
        viewBox="0 0 138 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute top-1/2 left-3 -translate-y-1/2 text-zinc-700",
          className
        )}
      >
        <path d={basePath} stroke="currentColor" strokeWidth="2" />
      </svg>
    </>
  );
};

const TopSVG = ({ className }: { className?: string }) => {
  const TOP_ANIMATION = {
    initial: { strokeDashoffset: 35, strokeDasharray: "35 450" },
    animate: { strokeDashoffset: -450 },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: [0.65, 0, 0.35, 1] as any,
    },
  } as const;

  const cornerPath = "M0 0.5L68.5 0.5L83 15L134.5 15";

  return (
    <>
      {/* Animated corner line */}
      <motion.svg
        width="150"
        height="16"
        viewBox="0 0 150 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute top-40 left-4 -translate-y-1/2 text-blue-500 z-20 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]",
          className
        )}
      >
        <motion.path
          d={cornerPath}
          stroke="currentColor"
          strokeWidth="2"
          {...TOP_ANIMATION}
        />
      </motion.svg>

      {/* Static background corner line */}
      <svg
        width="150"
        height="16"
        viewBox="0 0 150 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute top-40 left-4 -translate-y-1/2 text-zinc-700",
          className
        )}
      >
        <path d={cornerPath} stroke="currentColor" strokeWidth="2" />
      </svg>
    </>
  );
};

const BottomSVG = ({ className }: { className?: string }) => {
  const BOTTOM_ANIMATION = {
    initial: { strokeDashoffset: 200, strokeDasharray: "35 430" },
    animate: { strokeDashoffset: -430 },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: [0.65, 0, 0.35, 1] as any,
    },
  } as const;

  const cornerPath = "M0 15L68.5 15L83 0.5L134.5 0.5";

  return (
    <>
      {/* Animated corner line */}
      <motion.svg
        width="150"
        height="16"
        viewBox="0 0 150 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute top-60 left-4 -translate-y-1/2 text-blue-500 z-20 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]",
          className
        )}
      >
        <motion.path
          d={cornerPath}
          stroke="currentColor"
          strokeWidth="2"
          {...BOTTOM_ANIMATION}
        />
      </motion.svg>

      {/* Static background corner line */}
      <svg
        width="150"
        height="16"
        viewBox="0 0 150 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute top-60 left-4 -translate-y-1/2 text-zinc-700",
          className
        )}
      >
        <path
          d={cornerPath}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </>
  );
};

const Box = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("size-6 rounded-md bg-zinc-950 absolute z-30", className)}
      aria-hidden="true"
    />
  );
};

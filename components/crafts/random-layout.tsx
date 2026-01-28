"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import {
  File,
  Funnel,
  PlusIcon,
  SearchIcon,
  Sun,
  Moon,
  SunIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import MoonIcon from "../Icons/MoonIcon";
import SpringArrow from "../ui_components/SpringArrow";

const LayoutGrid = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleTap = () => {
    setIsHovered(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set timeout to reset after 3 seconds
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  React.useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-4 scale-68 sm:scale-90 md:scale-100">
      <div className="absolute top-1/2 -translate-y-1/2 -right-25 hidden md:flex items-center justify-center gap-4">
        <SpringArrow className="size-10 text-zinc-500 animate-bounce-slow rotate-270" />
        <p className="font-roboto-mono text-sm text-zinc-500 tracking-tight">
          Hover
        </p>
      </div>
      {/* Back button */}
      <div
        className="relative h-full flex items-center justify-center border p-13 rounded-3xl bg-zinc-900 border-zinc-800 shadow-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleTap}
      >
        <div
          className={cn(
            "flex flex-col gap-6 transition-all duration-300",
            !isHovered && "blur-xs",
          )}
        >
          {/* Row 1 */}
          <Row>
            <AnimatedItem
              delay={0}
              initialX={-40}
              initialY={-30}
              initialRotate={-15}
              isHovered={isHovered}
            >
              <Button>Button</Button>
            </AnimatedItem>
            <AnimatedItem
              delay={0.05}
              initialX={-20}
              initialY={-35}
              initialRotate={12}
              isHovered={isHovered}
            >
              <Input placeholder="Search" />
            </AnimatedItem>
            <AnimatedItem
              delay={0.1}
              initialX={15}
              initialY={-30}
              initialRotate={-10}
              isHovered={isHovered}
            >
              <Toggle />
            </AnimatedItem>
            <AnimatedItem
              delay={0.15}
              initialX={35}
              initialY={-25}
              initialRotate={18}
              isHovered={isHovered}
            >
              <Badge>New</Badge>
            </AnimatedItem>
          </Row>

          {/* Row 2 (Center Logo) */}
          <Row center>
            <AnimatedItem
              delay={0.2}
              initialX={-45}
              initialY={-8}
              initialRotate={-20}
              isHovered={isHovered}
            >
              <Loader />
            </AnimatedItem>
            <AnimatedItem
              delay={0.25}
              initialX={-25}
              initialY={10}
              initialRotate={15}
              isHovered={isHovered}
            >
              <Theme />
            </AnimatedItem>
            <AnimatedItem
              delay={0.3}
              initialX={5}
              initialY={-12}
              initialRotate={10}
              isHovered={isHovered}
            >
              <Logo />
            </AnimatedItem>
            <AnimatedItem
              delay={0.3}
              initialX={30}
              initialY={8}
              initialRotate={-18}
              isHovered={isHovered}
            >
              <Card />
            </AnimatedItem>
          </Row>

          {/* Row 3 */}
          <Row>
            <AnimatedItem
              delay={0.35}
              initialX={-38}
              initialY={28}
              initialRotate={16}
              isHovered={isHovered}
            >
              <FileUpload />
            </AnimatedItem>
            <AnimatedItem
              delay={0.4}
              initialX={-18}
              initialY={35}
              initialRotate={-14}
              isHovered={isHovered}
            >
              <Slider />
            </AnimatedItem>
            <AnimatedItem
              delay={0.45}
              initialX={12}
              initialY={32}
              initialRotate={12}
              isHovered={isHovered}
            >
              <Tooltip content="Copy to clipboard">
                <button className="px-3 py-1 rounded bg-zinc-200 text-xs text-zinc-900">
                  Tooltip
                </button>
              </Tooltip>
            </AnimatedItem>
            <AnimatedItem
              delay={0.5}
              initialX={28}
              initialY={26}
              initialRotate={-18}
              isHovered={isHovered}
            >
              <IconButton />
            </AnimatedItem>
            <AnimatedItem
              delay={0.55}
              initialX={40}
              initialY={32}
              initialRotate={14}
              isHovered={isHovered}
            >
              <FilterButton />
            </AnimatedItem>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LayoutGrid;

const AnimatedItem = ({
  children,
  delay,
  initialX,
  initialY,
  initialRotate,
  isHovered,
  scale = 0.7,
}: {
  children: React.ReactNode;
  delay: number;
  initialX: number;
  initialY: number;
  initialRotate: number;
  isHovered: boolean;
  scale?: number;
}) => {
  return (
    <motion.div
      initial={{
        x: initialX,
        y: initialY,
        rotate: initialRotate,
        scale,
        opacity: 1,
      }}
      animate={
        isHovered
          ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }
          : {
              x: initialX,
              y: initialY,
              rotate: initialRotate,
              scale,
              opacity: 1,
            }
      }
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8,
        delay: isHovered ? delay : 0,
        x: {
          type: "spring",
          stiffness: 350,
          damping: 28,
          mass: 0.7,
        },
        y: {
          type: "spring",
          stiffness: 350,
          damping: 28,
          mass: 0.7,
        },
        rotate: {
          type: "spring",
          stiffness: 280,
          damping: 22,
          mass: 0.6,
        },
        scale: {
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1],
        },
        opacity: {
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const Row = ({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2",
        center && "relative",
      )}
    >
      {children}
    </div>
  );
};

const Logo = () => {
  return (
    <div className="relative size-20 rounded-xl flex items-center justify-center">
      <Image
        src="/vercel.svg"
        alt="Logo"
        fill
        className="p-3 bg-zinc-800 rounded-2xl"
      />
    </div>
  );
};

const Button = ({ children }: { children: React.ReactNode }) => (
  <div className="px-3 py-1.5 rounded-lg bg-zinc-200 text-zinc-900 text-xs font-medium shadow active:scale-95 transition-transform duration-100 cursor-pointer select-none">
    {children}
  </div>
);

const Input = ({ placeholder }: { placeholder?: string }) => (
  <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200">
    <SearchIcon className="size-3 text-zinc-400" />
    <input
      type="text"
      className="bg-transparent outline-none border-none text-xs text-zinc-700"
      placeholder={placeholder}
    />
  </div>
);

const Toggle = () => {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={cn(
        "w-10 h-5 rounded-full flex items-center px-0.5 transition-colors duration-200 cursor-pointer",
        isOn ? "bg-zinc-300" : "bg-zinc-700",
      )}
    >
      <div
        className={cn(
          "w-4 h-4 rounded-full bg-white shadow transition-transform duration-200",
          isOn && "translate-x-5",
        )}
      />
    </button>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
    {children}
  </div>
);

const Card = () => (
  <div className="w-24 h-14 rounded-lg bg-white border border-zinc-200 p-2 flex flex-col gap-1 shadow-sm">
    <div className="h-2 w-1/2 bg-zinc-300 rounded" />
    <div className="h-3 w-2/3 bg-zinc-400 rounded" />
  </div>
);

const Theme = () => {
  const [isDark, setIsDark] = React.useState(true);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "size-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200",
        isDark ? "bg-zinc-800 text-zinc-400" : "bg-zinc-100 text-zinc-600",
      )}
    >
      {isDark ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </button>
  );
};

const Slider = () => {
  const [value, setValue] = React.useState(66);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-20 h-3 rounded-full bg-zinc-700 cursor-pointer">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div
          className="h-full bg-zinc-300 rounded-full transition-all duration-100"
          style={{ width: `${value}%` }}
        />
        <span
          className="absolute -top-6 text-xs text-zinc-400 font-medium transition-all duration-100"
          style={{ left: `calc(${value}% - 8px)` }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

const IconButton = () => (
  <div className="size-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center border border-zinc-200">
    <PlusIcon />
  </div>
);

const FilterButton = () => (
  <div className="px-2 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center gap-1 cursor-pointer">
    <Funnel className="size-3 text-zinc-400" />
    <span className="text-xs text-zinc-700">Filter</span>
  </div>
);

const Tooltip = ({
  children,
  content,
  side = "top",
  className,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}) => {
  const sideStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowStyles = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-zinc-950",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-zinc-100",
    left: "left-full top-1/2 -translate-y-1/2 border-l-zinc-100",
    right: "right-full top-1/2 -translate-y-1/2 border-r-zinc-100",
  };

  return (
    <span className="relative inline-flex group">
      {/* Trigger */}
      <span
        tabIndex={0}
        className="outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
      >
        {children}
      </span>

      {/* Tooltip */}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50",
          sideStyles[side],
          "opacity-0 scale-95 translate-y-1",
          "group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0",
          "group-focus-visible:opacity-100 group-focus-visible:scale-100 group-focus-visible:translate-y-0",
          "transition-all duration-200 ease-out",
          className,
        )}
      >
        <span className="relative block px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-700 text-white text-xs font-medium whitespace-nowrap shadow-lg">
          {content}

          {/* Arrow */}
          <span
            className={cn(
              "absolute w-0 h-0 border-4 border-transparent",
              arrowStyles[side],
            )}
          />
        </span>
      </span>
    </span>
  );
};

const FileUpload = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative px-3 py-2 rounded-sm bg-zinc-100 border border-dashed border-zinc-300 cursor-pointer hover:border-zinc-400 transition-colors",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <File className="size-4 text-zinc-500" />
        <span className="text-xs text-zinc-600 truncate max-w-20">
          Upload File
        </span>
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="flex items-center gap-2 bg-zinc-100 px-3 py-1.5 rounded-lg border border-zinc-200">
      <div className="size-4 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin" />
      <span className="text-xs text-zinc-600 font-medium">Loading...</span>
    </div>
  );
};

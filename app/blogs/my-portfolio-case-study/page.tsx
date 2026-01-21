import FramerMotionIcon from "@/components/Icons/FramerMotionIcon";
import GithubTechIcon from "@/components/Icons/GithubTechIcon";
import GSAPIcon from "@/components/Icons/GSAPIcon";
import NextJSIcon from "@/components/Icons/NextJSIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import TailwindIcon from "@/components/Icons/TailwindIcon";
import TypescriptIcon from "@/components/Icons/TypescriptIcon";
import VercelIcon from "@/components/Icons/VercelIcon";
import BottomRight from "@/components/Lcorner/BottomRight";
import TopLeft from "@/components/Lcorner/TopLeft";
import StripGridHorizontal from "@/components/StripGridHorizontal";
import ToolTip from "@/components/ToolTip";
import { cn } from "@/lib/cn";
import React from "react";

const page = () => {
  const stacks = [
    { name: "ReactJS", icon: <ReactIcon /> },
    { name: "NextJS", icon: <NextJSIcon /> },
    { name: "Typescript", icon: <TypescriptIcon /> },
    { name: "Vercel", icon: <VercelIcon /> },
    { name: "TailwindCSS", icon: <TailwindIcon /> },
    { name: "GSAP", icon: <GSAPIcon /> },
    { name: "Framer Motion", icon: <FramerMotionIcon /> },
    { name: "GitHub", icon: <GithubTechIcon /> },
  ];

  return (
    <div className="w-full border-x border-white flex flex-col lg:border-x-0">
      <div className=" py-3 md:py-6 flex flex-col gap-3 md:gap-4">
        <StripGridHorizontal className="h-10 md:h-12" />

        {/* Blog Entry 1 */}
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            Building My Portfolio with Next.js, GSAP & Motion
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        {/* Blog Content 1 */}
        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light py-1",
          )}
        >
          <p className="font-medium text-white/80 hover:bg-white/10 transition-all duration-100">
            This portfolio is not just a collection of projects — it’s an
            experiment in interaction, motion, and performance. I built it to
            reflect how I think about frontend engineering: clean logic, subtle
            motion, and zero unnecessary noise.
          </p>
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />
        {/* Blog Entry 2 */}
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            1. Why I Needed a Custom Portfolio
            <TopLeft />
            <BottomRight />
          </h2>
        </div>
        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2",
          )}
        >
          <ul className="list-disc text-white/80 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
            <li>Most portfolios felt static and forgettable</li>
            <li>I wanted motion to feel intentional, not decorative</li>
            <li>Performance and smoothness mattered more than visuals alone</li>
            <li>I needed full control over routing and transitions</li>
          </ul>
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />
        {/* Blog Entry 3 */}
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            2. Key Technologies Used
            <TopLeft />
            <BottomRight />
          </h2>
        </div>
        <div
          className={cn(
            "text-white flex justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2",
          )}
        >
          {stacks.map((stack) => (
            <ToolTip key={stack.name} infoText={stack.name}>
              <div className="size-5 md:size-10 flex justify-center items-center hover:scale-105 transition-transform">
                {React.cloneElement(stack.icon, {
                  className: "size-4 md:size-8",
                })}
              </div>
            </ToolTip>
          ))}
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />
        {/* Blog Entry 4 */}
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            3. Architecture Decisions
            <TopLeft />
            <BottomRight />
          </h2>
        </div>
        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2",
          )}
        >
          <ul className="list-disc text-white/80 hover:bg-white/10 transition-all duration-100 ml-2 md:ml-0">
            <li>App Router with nested layouts</li>
            <li>GSAP-driven global page transitions</li>
            <li>Client components only where interaction is required</li>
            <li>Reusable UI primitives instead of heavy components</li>
          </ul>
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />
        {/* Blog Entry 5 */}
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[16px] md:text-[22px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
             4. Motion Philosophy
            <TopLeft />
            <BottomRight />
          </h2>
        </div>
        <div
          className={cn(
            "text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2",
          )}
        >
          <p className="text-white/80 hover:bg-white/10 transition-all duration-100">
            Motion is used only when it improves clarity or flow. Page
            transitions hide layout shifts, micro-animations guide attention,
            and nothing runs without purpose.
          </p>
        </div>

      </div>
    </div>
  );
};

export default page;

"use client";
import { TechStackDisplay } from "@/components/ui/tech-stack";
import { DashedHeader, DashedLineContainer } from "@/components/ui/dashed-containers";
import StripGridHorizontal from "@/components/ui/StripGridHorizontal";
import ToolTip from "@/components/ui/ToolTip";
import { cn } from "@/lib/cn";
import React from "react";
import type { Metadata } from "next";

const page = () => {


  return (
    <div className="w-full border-x border-white flex flex-col lg:border-x-0">
      <div className=" py-3 md:py-6 flex flex-col gap-3 md:gap-4">
        <StripGridHorizontal className="h-10 md:h-12" />

        {/* Blog Entry 1 */}
        <DashedLineContainer>
          <DashedHeader className="text-[16px] md:text-[22px]">
            Building My Portfolio with Next.js, GSAP & Motion
          </DashedHeader>
        </DashedLineContainer>

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
        <DashedLineContainer>
          <DashedHeader className="text-[16px] md:text-[22px]">
            1. Why I Needed a Custom Portfolio
          </DashedHeader>
        </DashedLineContainer>
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
        <DashedLineContainer>
          <DashedHeader className="text-[16px] md:text-[22px]">
            2. Key Technologies Used
          </DashedHeader>
        </DashedLineContainer>
        <div
          className={cn(
            "text-white flex justify-between px-4 md:px-16 border-y border-dashed border-white/30",
            "font-roboto-mono tracking-tighter text-[8px] md:text-[14px] font-light md:py-2",
          )}
        >
          <TechStackDisplay techNames={["ReactJS", "NextJS", "Typescript", "Vercel", "TailwindCSS", "GSAP", "Framer Motion", "GitHub"]} containerClassName="px-0 w-full" />
        </div>

        <StripGridHorizontal className="h-4 md:h-6" />
        {/* Blog Entry 4 */}
        <DashedLineContainer>
          <DashedHeader className="text-[16px] md:text-[22px]">
            3. Architecture Decisions
          </DashedHeader>
        </DashedLineContainer>
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
        <DashedLineContainer>
          <DashedHeader className="text-[16px] md:text-[22px]">
             4. Motion Philosophy
          </DashedHeader>
        </DashedLineContainer>
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


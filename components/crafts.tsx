"use client";
import BottomRight from "@/components/Lcorner/BottomRight";
import TopLeft from "@/components/Lcorner/TopLeft";
import StripGridHorizontal from "@/components/StripGridHorizontal";
import React, { ButtonHTMLAttributes, use } from "react";
import LayoutAnimation from "@/components/crafts/layout-animation";
import ProgressiveBlur from "@/components/crafts/progessive-blur";
import SVGCard from "@/components/crafts/svg-card";
import RandomLayout from "@/components/crafts/random-layout";
import ChangeableTabs from "@/components/crafts/changeable-tabs";
import GooeyMenu from "@/components/crafts/gooey-menu";
import Incrementor from "@/components/crafts/incrementor";
import InfiniteMenu from "@/components/crafts/infinite-menu";
import GradientText from "@/components/crafts/gradient-text";
import PurchaseButton from "@/components/crafts/purchase-sequence";
import type { Metadata } from "next";
import { cn } from "@/lib/cn";
import { useState } from "react";
import TransitionLink from "./Transition/TransitionLink";
import { useHoverSound } from "@/hooks/useHoverSound";

export const metadata: Metadata = {
  title: "Crafts — Interactive UI Experiments with Next.js & GSAP",
  description:
    "A collection of interactive UI experiments and crafts built with Next.js and GSAP, showcasing innovative designs and animations.",
  keywords: [
    "crafts",
    "UI experiments",
    "Next.js crafts",
    "GSAP animations",
    "interactive UI design",
  ],

  openGraph: {
    title: "Crafts — Next.js & GSAP UI Experiments",
    description:
      "Explore a variety of interactive UI experiments and crafts built using Next.js and GSAP.",
    url: "https://malaypatel.com/crafts",
    siteName: "Malay Patel Portfolio",
    images: [
      {
        url: "/og/crafts-overview.png",
        width: 1200,
        height: 630,
        alt: "Crafts by Malay Patel",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Crafts — Next.js & GSAP UI Experiments",
    description:
      "A showcase of interactive UI experiments and crafts built with Next.js and GSAP.",
    images: ["/og/crafts-overview.png"],
  },
};

// Define crafts configuration
const crafts = [
  {
    title: "Purchase Sequence",
    component: <PurchaseButton />, // Placeholder for the actual Purchase Sequence component
    date: "20.1.2026",
  },
  {
    title: "Gradient Text",
    component: <GradientText />,
    date: "20.1.2026",
  },
  {
    title: "Infinite Menu",
    component: <InfiniteMenu />,
    date: "20.1.2026",
  },
  {
    title: "SVG Card",
    component: <SVGCard />,
    date: "9.1.2026",
  },
  {
    title: "Layout Animation",
    component: <LayoutAnimation />,
    date: "9.1.2026",
  },
  {
    title: "Progressive Blur",
    component: <ProgressiveBlur />,
    date: "9.1.2026",
  },
  {
    title: "Random Layout",
    component: <RandomLayout />,
    date: "9.1.2026",
  },
  {
    title: "Changeable Tabs",
    component: <ChangeableTabs />,
    date: "9.1.2026",
  },
  {
    title: "Gooey Menu",
    component: <GooeyMenu />,
    date: "9.1.2026",
  },
  {
    title: "Incrementor",
    component: <Incrementor />,
    date: "9.1.2026",
  },
];

const Crafts = () => {
  const [expand, setExpand] = useState(true);

  const { play } = useHoverSound();
  return (
    <div
      className={cn(
        "w-full border-x border-white flex flex-col lg:border-x-0 relative overflow-hidden h-260",
      )}
    >
      <div className="w-full h-40 bg-linear-to-t from-black via-black/50 to-transparent absolute -bottom-2 z-50" />
      <TransitionLink href="/crafts">
        <ExpandMoreButton
          className={cn(
            "absolute bottom-10 left-1/2 transform -translate-x-1/2 z-90",
          )}
          onMouseEnter={play}
        >
          Explore More
        </ExpandMoreButton>
      </TransitionLink>

      <div className=" py-3 md:py-6 flex flex-col gap-3 md:gap-4">
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[18px] md:text-[24px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            Crafts
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        {/* <StripGridHorizontal className="h-0" /> */}
        <div className="flex flex-col gap-4 md:gap-10">
          {/* Render crafts dynamically */}
          {crafts.map((craft, index) => (
            <React.Fragment key={index}>
              <div>
                <div className="text-white flex justify-between items-center px-4 md:px-16 border-t border-dashed border-white/30">
                  <h2 className="font-roboto-mono font-bold text-zinc-400 tracking-tighter text-[14px] md:text-[18px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
                    {craft.title}
                    <TopLeft />
                    <BottomRight />
                  </h2>

                  <h2 className="font-roboto-mono tracking-tighter text-[14px] md:text-[18px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
                    {index + 1}
                    <TopLeft />
                    <BottomRight />
                  </h2>
                </div>

                <div className="text-white flex flex-col justify-center items-center px-4 md:px-16 border-y border-dashed border-white/30">
                  <div className="w-full ">
                    <p className="font-roboto-mono tracking-tighter text-[10px] md:text-[12px] px-2 py-1 cursor-default text-zinc-400">
                      {craft.date}
                    </p>
                  </div>
                  {craft.component}
                </div>

                {index == crafts.length - 1 && (
                  <div className="w-full h-10"></div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crafts;

type ExpandMoreButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

const ExpandMoreButton = ({
  className,
  children,
  ...props
}: ExpandMoreButtonProps) => {
  return (
    <div
      className={cn(
        "px-4 py-2 bg-white rounded-lg border border-zinc-400 shadow-[inset_3px_3px_9px_rgba(0,0,0,0.3),inset_-3px_-3px_9px_rgba(0,0,0,0.3)] cursor-pointer flex items-center justify-center font-semibold font-inter tracking-tight hover:bg-zinc-200 transition-colors text-black",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

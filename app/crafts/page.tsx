import BottomRight from "@/components/Lcorner/BottomRight";
import TopLeft from "@/components/Lcorner/TopLeft";
import StripGridHorizontal from "@/components/StripGridHorizontal";
import React from "react";
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
import CardMenu from "@/components/crafts/card-menu";
// import DottedBackground from "@/components/crafts/dotted-background";
import VercelFilter from "@/components/crafts/vercel-filter";
// import MeteorCard from "@/components/crafts/comet-meteor";
import dynamic from "next/dynamic";
import LazyCraft from "@/components/LazyCraft";
import AppleClock from "@/components/crafts/apple-clock";

const DottedBackground = dynamic(
  () => import("@/components/crafts/dotted-background"),
  { ssr: true },
);

const MeteorCard = dynamic(() => import("@/components/crafts/comet-meteor"), {
  ssr: true,
});

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
    id: "apple-clock",
    title: "Apple Style Clock",
    component: <AppleClock />,
    date: "31.1.2026",
  },
  {
    id: "meteor",
    title: "Comet Meteor Animation",
    component: <MeteorCard />,
    date: "28.1.2026",
  },
  {
    id: "vercel",
    title: "Vercel Style Filter Menu",
    component: <VercelFilter />,
    date: "28.1.2026",
  },

  {
    id: "dots",
    title: "Dotted Background",
    component: <DottedBackground />,
    date: "24.1.2026",
  },
  {
    id: "purchase",
    title: "Purchase Sequence",
    component: <PurchaseButton />,
    date: "20.1.2026",
  },
  {
    id: "gradient",
    title: "Gradient Text",
    component: <GradientText />,
    date: "20.1.2026",
  },
  {
    id: "infinite",
    title: "Infinite Menu",
    component: <InfiniteMenu />,
    date: "20.1.2026",
  },
  {
    id: "card-menu",
    title: "Card Menu",
    component: <CardMenu />,
    date: "26.1.2026",
  },
  {
    id: "layout",
    title: "Layout Animation",
    component: <LayoutAnimation />,
    date: "9.1.2026",
  },
  {
    id: "blur",
    title: "Progressive Blur",
    component: <ProgressiveBlur />,
    date: "9.1.2026",
  },
  {
    id: "svg",
    title: "SVG Card",
    component: <SVGCard />,
    date: "9.1.2026",
  },
  {
    id: "tabs",
    title: "Changeable Tabs",
    component: <ChangeableTabs />,
    date: "9.1.2026",
  },
  {
    id: "gooey",
    title: "Gooey Menu",
    component: <GooeyMenu />,
    date: "9.1.2026",
  },
  {
    id: "inc",
    title: "Incrementor",
    component: <Incrementor />,
    date: "9.1.2026",
  },
  {
    id: "random",
    title: "Random Layout",
    component: <RandomLayout />,
    date: "9.1.2026",
  },
];

const page = () => {
  return (
    <div className="w-full border-x border-white flex flex-col lg:border-x-0 relative overflow-y-hidden">
      <div className=" py-3 md:py-6 flex flex-col gap-3 md:gap-4">
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[18px] md:text-[24px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            Crafts
            <TopLeft />
            <BottomRight />
          </h2>
        </div>

        <StripGridHorizontal className="h-10 md:h-12" />

        {/* Render crafts dynamically */}
        {crafts.map((craft, index) => (
          <React.Fragment key={craft.title}>
            <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
              <h2 className="font-roboto-mono font-bold tracking-tighter text-[14px] md:text-[20px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
                {craft.title}
                <TopLeft />
                <BottomRight />
              </h2>

              <h2 className="font-roboto-mono tracking-tighter text-[14px] md:text-[20px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
                {index + 1}
                <TopLeft />
                <BottomRight />
              </h2>
            </div>

            <div className="text-white flex flex-col justify-center items-center px-4 md:px-16 border-y border-dashed border-white/30">
              <div className="w-full">
                <p className="font-roboto-mono tracking-tighter text-[10px] md:text-[12px] px-2 py-1 cursor-default text-zinc-400">
                  {craft.date}
                </p>
              </div>
              <LazyCraft>{craft.component}</LazyCraft>
            </div>

            {index !== crafts.length - 1 && (
              <StripGridHorizontal className="h-4 md:h-6" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default page;

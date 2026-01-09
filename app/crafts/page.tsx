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

// Define crafts configuration
const crafts = [
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
    title: "SVG Card",
    component: <SVGCard />,
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

const page = () => {
  return (
    <div className="w-full border-x border-white flex flex-col lg:border-x-0">
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
          <React.Fragment key={index}>
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
              {craft.component}
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

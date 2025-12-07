import React from "react";
import TopLeft from "./Lcorner/TopLeft";
import BottomRight from "./Lcorner/BottomRight";
import ReactIcon from "./Icons/ReactIcon";
import ToolTip from "./ToolTip";
import NextJSIcon from "./Icons/NextJSIcon";
import TypescriptIcon from "./Icons/TypescriptIcon";
import VercelIcon from "./Icons/VercelIcon";
import TailwindIcon from "./Icons/TailwindIcon";
import GSAPIcon from "./Icons/GSAPIcon";
import FramerMotionIcon from "./Icons/FramerMotionIcon";
import FigmaIcon from "./Icons/FigmaIcon";
import ThreejsIcon from "./Icons/ThreejsIcon";
import GithubTechIcon from "./Icons/GithubTechIcon";
import MongodbIcon from "./Icons/MongodbIcon";
import NodejsIcon from "./Icons/NodejsIcon";
import ExpressjsIcon from "./Icons/ExpressjsIcon";
import FirebaseIcon from "./Icons/FirebaseIcon";

const TechnologyStack = () => {

    const stacks = [
    { name: "ReactJS", icon: <ReactIcon /> },
    { name: "NextJS", icon: <NextJSIcon /> },
    { name: "Typescript", icon: <TypescriptIcon /> },
    { name: "Vercel", icon: <VercelIcon /> },
    { name: "TailwindCSS", icon: <TailwindIcon /> },
    { name: "GSAP", icon: <GSAPIcon /> },
    { name: "Framer Motion", icon: <FramerMotionIcon /> },
    { name: "Figma", icon: <FigmaIcon />},
    { name: "Three.js", icon: <ThreejsIcon /> },
    { name: "GitHub", icon: <GithubTechIcon /> },
    { name: "MongoDB", icon: <MongodbIcon /> },
    { name: "Node.js", icon: <NodejsIcon /> },
    { name: "Express.js", icon: <ExpressjsIcon /> },
    { name: "Firebase", icon: <FirebaseIcon /> },
    ]

  return (
    <div className="py-6 flex flex-col gap-4">
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/40">
        <h2 className="font-roboto-mono font-bold tracking-tighter text-[24px] px-2 border-x border-dashed border-white/40 relative">
          Technology Stack
          <TopLeft />
          <BottomRight />
        </h2>
      </div>
      <div className="text-white flex items-center justify-between p-3 border-y border-dashed border-white/40">
        {stacks.map((stack) => (
          <ToolTip key={stack.name} infoText={stack.name}>
            <div className="size-10 flex justify-center items-center hover:scale-105 transition-transform">
              {React.cloneElement(stack.icon, { className: "size-8" })}
            </div>
          </ToolTip>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;

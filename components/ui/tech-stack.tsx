import React, { JSX } from "react";
import ToolTip from "@/components/ui/ToolTip";
import ReactIcon from "@/components/Icons/ReactIcon";
import NextJSIcon from "@/components/Icons/NextJSIcon";
import TypescriptIcon from "@/components/Icons/TypescriptIcon";
import VercelIcon from "@/components/Icons/VercelIcon";
import TailwindIcon from "@/components/Icons/TailwindIcon";
import GSAPIcon from "@/components/Icons/GSAPIcon";
import GithubTechIcon from "@/components/Icons/GithubTechIcon";
import MongodbIcon from "@/components/Icons/MongodbIcon";
import NodejsIcon from "@/components/Icons/NodejsIcon";
import ExpressjsIcon from "@/components/Icons/ExpressjsIcon";
import FirebaseIcon from "@/components/Icons/FirebaseIcon";
import ThreejsIcon from "@/components/Icons/ThreejsIcon";
import FigmaIcon from "@/components/Icons/FigmaIcon";
import FramerMotionIcon from "@/components/Icons/FramerMotionIcon";
import { cn } from "@/lib/cn";

export const techIconsMap: Record<string, JSX.Element> = {
  "ReactJS": <ReactIcon />,
  "NextJS": <NextJSIcon />,
  "Typescript": <TypescriptIcon />,
  "TailwindCSS": <TailwindIcon />,
  "Vercel": <VercelIcon />,
  "GSAP": <GSAPIcon />,
  "GitHub": <GithubTechIcon />,
  "MongoDB": <MongodbIcon />,
  "Node.js": <NodejsIcon />,
  "Express.js": <ExpressjsIcon />,
  "Firebase": <FirebaseIcon />,
  "Three.js": <ThreejsIcon />,
  "Figma": <FigmaIcon />,
  "Framer Motion": <FramerMotionIcon />,
};

export const defaultTechStackList = [
  "ReactJS",
  "NextJS",
  "Typescript",
  "Vercel",
  "TailwindCSS",
  "GSAP",
  "Framer Motion",
  "Figma",
  "Three.js",
  "GitHub",
  "MongoDB",
  "Node.js",
  "Express.js",
  "Firebase",
];

export const TechStackDisplay = ({
  techNames = defaultTechStackList,
  containerClassName,
  iconSizeClassName = "size-4 md:size-8",
  wrapperClassName = "size-5 md:size-10",
}: {
  techNames?: string[];
  containerClassName?: string;
  iconSizeClassName?: string;
  wrapperClassName?: string;
}) => {
  return (
    <div className={cn("text-white flex items-center justify-between", containerClassName)}>
      {techNames.map((tech) => {
        const icon = techIconsMap[tech];
        if (!icon) return null;
        return (
          <ToolTip key={tech} infoText={tech}>
            <div className={cn("flex justify-center items-center hover:scale-105 transition-transform", wrapperClassName)}>
              {React.cloneElement(icon, {
                className: iconSizeClassName,
              })}
            </div>
          </ToolTip>
        );
      })}
    </div>
  );
};

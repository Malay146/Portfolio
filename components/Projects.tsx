import React, { JSX } from "react";
import TopLeft from "./Lcorner/TopLeft";
import BottomRight from "./Lcorner/BottomRight";
import Image from "next/image";
import Button from "./ui_components/Button";
import GlobeIcon from "./Icons/GlobeIcon";
import GithubIcon from "./Icons/GithubIcon";
import CrossArrow from "./Icons/CrossArrow";
import Link from "next/link";
import ToolTip from "./ToolTip";
import ReactIcon from "./Icons/ReactIcon";
import NextJSIcon from "./Icons/NextJSIcon";
import TypescriptIcon from "./Icons/TypescriptIcon";
import VercelIcon from "./Icons/VercelIcon";
import TailwindIcon from "./Icons/TailwindIcon";
import GSAPIcon from "./Icons/GSAPIcon";
import GithubTechIcon from "./Icons/GithubTechIcon";
import { projects } from "@/data/projects";

export const techIcons: Record<string, JSX.Element> = {
  ReactJS: <ReactIcon />,
  NextJS: <NextJSIcon />,
  Typescript: <TypescriptIcon />,
  TailwindCSS: <TailwindIcon />,
  Vercel: <VercelIcon />,
  GSAP: <GSAPIcon />,
  GitHub: <GithubTechIcon />,
};

const Projects = () => {
  const stacks = [
    { name: "ReactJS", icon: <ReactIcon /> },
    { name: "NextJS", icon: <NextJSIcon /> },
    { name: "Typescript", icon: <TypescriptIcon /> },
    { name: "Vercel", icon: <VercelIcon /> },
    { name: "TailwindCSS", icon: <TailwindIcon /> },
    { name: "GSAP", icon: <GSAPIcon /> },
    { name: "GitHub", icon: <GithubTechIcon /> },
    ,
  ];

  return (
    <div className="py-6 flex flex-col gap-4">
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/30">
        <h2 className="font-roboto-mono font-bold tracking-tighter text-[24px] px-2 border-x border-dashed border-white/30 relative">
          Projects
          <TopLeft />
          <BottomRight />
        </h2>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          className="border-y border-dashed border-white/30 flex"
        >
      
          <div className="w-[520px] h-[220px] relative overflow-hidden cursor-pointer">
            <Link href={project.imageLink} target="_blank">
              <Image src={project.imageSrc} alt={project.title} fill />
               <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full bg-black/50 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-all duration-300 ease-in-out">
              <CrossArrow className="size-8 bg-white rounded-lg border border-zinc-500 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.25),inset_4px_4px_8px_rgba(0,0,0,0.25)]" />
              <h5 className="font-inter font-bold text-white text-3xl tracking-tight">
                Visit
              </h5>
            </div>
            </Link>
          </div>

       
          <div className="flex flex-col gap-2 px-8 py-2 text-white w-full border-l border-dashed border-white/30">
            <div>
              <button className="font-inter text-xs border border-zinc-400 bg-[#212121] rounded-md px-1 py-0.5 shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.25),inset_1px_1px_2px_rgba(255,255,255,0.25)] flex items-center gap-1">
                {getStatusCircle(project.status)} {project.status}

              </button>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="font-roboto-mono text-[24px] font-bold tracking-tight">
                {project.title}
              </h3>

              <div className="flex gap-1">
                <Button href={project.webLink} className="p-1.5">
                  <GlobeIcon />
                </Button>
                <Button href={project.githubLink} className="p-1.5">
                  <GithubIcon />
                </Button>
              </div>
            </div>

            <p className="text-xs font-light font-roboto-mono text-justify tracking-tighter text-white/50">{project.description}</p>

       
            <div className="flex items-center">
              {project.techstack.map((tech) => (
                <ToolTip key={tech} infoText={tech}>
                  <div className="size-10 flex justify-center items-center">
                    {React.cloneElement(techIcons[tech], {
                      className: "size-6",
                    })}
                  </div>
                </ToolTip>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;


const getStatusCircle = (status: "Completed" | "In Progress" | "Upcoming") => {
  const colors = {
    Completed: "bg-green-500",
    "In Progress": "bg-yellow-400", // or bg-orange-500
    Upcoming: "bg-red-500",
  };

  return (
    <span className={`inline-block size-2 ml-0.5 rounded-full ${colors[status]}`}></span>
  );
};

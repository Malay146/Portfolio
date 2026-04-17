"use client";
import React, { JSX } from "react";
import { DashedHeader, DashedLineContainer } from "@/components/ui/dashed-containers";
import Image from "next/image";
import Button from "@/components/ui/Button";
import GlobeIcon from "@/components/Icons/GlobeIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import CrossArrow from "@/components/Icons/CrossArrow";
import Link from "next/link";
import ToolTip from "@/components/ui/ToolTip";
import { TechStackDisplay } from "@/components/ui/tech-stack";
import { projects } from "@/data/projects";
import { useHoverSound } from "@/hooks/useHoverSound";
import FirebaseIcon from "@/components/Icons/FirebaseIcon";
import ExpressjsIcon from "@/components/Icons/ExpressjsIcon";
import NodejsIcon from "@/components/Icons/NodejsIcon";
import MongodbIcon from "@/components/Icons/MongodbIcon";
import ThreejsIcon from "@/components/Icons/ThreejsIcon";
import FigmaIcon from "@/components/Icons/FigmaIcon";
import FramerMotionIcon from "@/components/Icons/FramerMotionIcon";



const Projects = () => {


  const { play } = useHoverSound();

  return (
    <div className="py-3 md:py-6 flex flex-col gap-3 md:gap-4">
      <DashedLineContainer className="px-6 md:px-16">
        <DashedHeader>Projects</DashedHeader>
      </DashedLineContainer>

      {projects.map((project) => (
        <div
          key={project.id}
          className="border-y border-dashed border-white/30 flex"
        >
          <div className="w-[275px] md:w-[550px] relative overflow-hidden cursor-pointer aspect-1200/630">
            <Link onMouseEnter={play} href={project.imageLink} target="_blank">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover transition-all duration-300"
              />

              <div className="absolute inset-0 bg-black/50 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-all duration-300 ease-in-out">
                <CrossArrow className="size-6 md:size-8 bg-white rounded-md md:rounded-lg border border-zinc-500 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.25),inset_4px_4px_8px_rgba(0,0,0,0.25)]" />

                <h5 className="font-inter font-bold text-white text-xl md:text-3xl tracking-tight">
                  Visit
                </h5>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-1 md:gap-2 px-4 md:px-8 py-1 md:py-2 text-white w-full border-l border-dashed border-white/30 h-full">
            <div>
              <button className="font-inter text-white/70 text-[8px] md:text-xs tracking-tight md:tracking-normal border border-zinc-400 bg-[#212121] rounded-sm md:rounded-md px-0.5 md:px-1 md:py-0.5 shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.25),inset_1px_1px_2px_rgba(255,255,255,0.25)] flex items-center gap-1">
                {getStatusCircle(project.status)} {project.status}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="font-roboto-mono text-[18px] md:text-[24px] font-bold tracking-tighter md:tracking-tight hover:bg-white/10 transition-all duration-100 cursor-default">
                {project.title}
              </h3>

              <div className="flex gap-1">
                <Button href={project.webLink} className="p-1 md:p-1.5">
                  <GlobeIcon className="size-3 md:size-4" />
                </Button>
                <Button href={project.githubLink} className="p-1 md:p-1.5">
                  <GithubIcon className="size-3 md:size-4" />
                </Button>
              </div>
            </div>

            <p className="text-[8px] md:text-xs font-light font-roboto-mono text-justify tracking-tighter text-white/50 hover:bg-white/10 transition-all duration-100 leading-2 md:leading-normal line-clamp-3">
              {project.description}
            </p>

            <TechStackDisplay techNames={project.techstack} containerClassName="justify-start gap-1" wrapperClassName="size-6 md:size-10" iconSizeClassName="size-4 md:size-6" />
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
    <span
      className={`inline-block size-2 ml-0.5 rounded-full ${colors[status]}`}
    ></span>
  );
};

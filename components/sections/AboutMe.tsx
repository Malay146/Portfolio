import React from "react";
import Button from "@/components/ui/Button";
import { DashedHeader, DashedLineContainer } from "@/components/ui/dashed-containers";
import FileIcon from "@/components/Icons/FileIcon";

const AboutMe = () => {
  return (
    <div className="py-3 md:py-6 flex flex-col gap-3 md:gap-4">
      <DashedLineContainer>
        <DashedHeader>About Me</DashedHeader>
        <Button href="/MALAY_PATEL_RESUME.pdf" className="font-inter text-[12px] md:text-[14px] tracking-tight font-medium flex items-center gap-0.5 hover:bg-white/10 transition-colors">
          <FileIcon />
          Resume
        </Button>
      </DashedLineContainer>
      <div className="text-white flex justify-between items-center px-6 md:px-16 border-y border-dashed border-white/30">
        <ul className="list-disc text-white/60 text-[10px] md:text-[16px] font-roboto-mono font-light tracking-tighter leading-3 md:leading-5 space-y-3 py-1 ">
          <li className="hover:bg-white/10 transition-all duration-100">
            I’m Malay, a{" "}
            <span className="inline-block font-bold text-white">
              Frontend Developer
            </span>{" "}
            who cares about clean design, smooth interactions, and meaningful
            digital experiences.
          </li>
          <li className="hover:bg-white/10 transition-all duration-100">
            I build modern web applications using technologies like{" "}
            <span className="inline-block font-bold text-white">
              React, Next.js, and Motion
            </span>{" "}
            — always with an eye for detail.
          </li>
          <li className="hover:bg-white/10 transition-all duration-100">
            Currently pursuing my{" "}
            <span className="inline-block font-bold text-white">
              B.Tech at CHARUSAT
            </span>{" "}
            and constantly experimenting with new ideas, tools, and interfaces.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

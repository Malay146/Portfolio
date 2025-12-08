import React from "react";
import Button from "./ui_components/Button";
import TopLeft from "./Lcorner/TopLeft";
import BottomRight from "./Lcorner/BottomRight";
import FileIcon from "./Icons/FileIcon";

const AboutMe = () => {
  return (
    <div className="py-6 flex flex-col gap-4">
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/30 ">
        <h2 className="font-roboto-mono font-bold tracking-tighter text-[24px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
          About Me
          <TopLeft />
          <BottomRight />
        </h2>
        <Button href="/MALAY_PATEL_RESUME.pdf" className="font-inter text-[14px] tracking-tight font-medium flex items-center gap-0.5 hover:bg-white/20 transition-colors">
          <FileIcon />
          Resume
        </Button>
      </div>
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/30">
        <ul className="list-disc text-white/60 text-[16px] font-roboto-mono font-light tracking-tighter leading-5 space-y-3 py-1 ">
          <li className="hover:bg-white/10 transition-all duration-100">
            I’m Malay, a{" "}
            <span className="inline-block font-bold text-white">
              Full-Stack Developer
            </span>{" "}
            who cares about clean design, smooth interactions, and meaningful
            digital experiences.
          </li>
          <li className="hover:bg-white/10 transition-all duration-100">
            I build modern web applications using technologies like{" "}
            <span className="inline-block font-bold text-white">
              React, Next.js, and Node.js
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

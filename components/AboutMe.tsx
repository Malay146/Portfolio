import React from "react";
import Button from "./ui_components/Button";
import TopLeft from "./Lcorner/TopLeft";
import BottomRight from "./Lcorner/BottomRight";

const AboutMe = () => {
  return (
    <div className="py-6 flex flex-col gap-4">
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/50">
        <h2 className="font-roboto-mono font-bold tracking-tighter text-[24px] px-2 border-x border-dashed border-white/50 relative">
          About Me
          <TopLeft />
          <BottomRight />
        </h2>
        <Button className="font-inter text-[14px] tracking-tight font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-file"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h5z" />
            <path d="M19 7h-4l-.001 -4.001z" />
          </svg>
          Resume
        </Button>
      </div>
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/50">
        <ul className="list-disc text-white/60 text-[16px] font-roboto-mono font-light tracking-tighter leading-5 space-y-3 py-1">
          <li>
            I’m Malay, a{" "}
            <span className="inline-block font-bold text-white">
              Full-Stack Developer
            </span>{" "}
            who cares about clean design, smooth interactions, and meaningful
            digital experiences.
          </li>
          <li>
            I build modern web applications using technologies like{" "}
            <span className="inline-block font-bold text-white">
              React, Next.js, and Node.js
            </span>{" "}
            — always with an eye for detail.
          </li>
          <li>
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

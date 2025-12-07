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
        <Button className="font-inter tracking-tight font-bold">
          Resume/CV
        </Button>
      </div>
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/50">
        <ul className="list-disc text-white/60 text-[16px] font-roboto-mono font-light tracking-tighter leading-5 space-y-3 py-1">
          <li>
            I’m Malay, a <span className="inline-block font-bold text-white">Full-Stack Developer</span> who cares about clean design, smooth interactions, and meaningful digital experiences.
          </li>
          <li>
            I build modern web applications using technologies like <span className="inline-block font-bold text-white">React, Next.js, and Node.js</span> — always with an eye for detail.
          </li>
          <li>
            Currently pursuing my <span className="inline-block font-bold text-white">B.Tech at CHARUSAT</span> and constantly experimenting with new ideas, tools, and interfaces.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import TopLeft from "./Lcorner/TopLeft";
import BottomRight from "./Lcorner/BottomRight";
import Button from "./ui_components/Button";
import FileIcon from "./Icons/FileIcon";

const Education = () => {
  return (
    <div className="py-6 flex flex-col gap-4">
      <div className="text-white flex justify-between items-center px-16 border-y border-dashed border-white/30">
        <h2 className="font-roboto-mono font-bold tracking-tighter text-[24px] px-2 border-x border-dashed border-white/30 relative">
          Education
          <TopLeft />
          <BottomRight />
        </h2>
      </div>
      <div className="text-white flex flex-col justify-between px-16 border-y border-dashed border-white/30">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-roboto-mono text-[18px] font-bold tracking-tighter">
            B.Tech — Charotar University of Science and Technology (CHARUSAT)
          </h2>
          <Button href="/ClgResult.pdf" className="p-1.5 mt-1.5">
            <FileIcon />
          </Button>
        </div>
        <h3 className="font-roboto-mono font-bold text-[16px] text-white/60 tracking-tighter leading-none">
          Current CGPA: 9.14 • 3rd Year
        </h3>
        <ul className="list-disc text-white/80 text-[14px] font-roboto-mono font-thin tracking-tighter leading-none space-y-1.5 pb-2 pt-5">
          <li>
            Pursuing a Bachelor's degree in technology with strong academic
            performance.
          </li>
          <li>
            Building expertise in software development, frontend engineering,
            and practical projects.
          </li>
          <li>
            Engaged in hands-on learning, teamwork, and real-world
            problem-solving.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col justify-between px-16 border-y border-dashed border-white/30">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-roboto-mono text-[18px] font-bold tracking-tighter">
            Higher Secondary School — Aryam Educational Academy
          </h2>
          <Button href="/12marksheet.pdf" className="p-1.5 mt-1.5">
            <FileIcon />
          </Button>
        </div>
        <h3 className="font-roboto-mono font-bold text-[16px] text-white/60 tracking-tighter leading-none">
          Overall Percentile: 95.19
        </h3>
        <ul className="list-disc text-white/80 text-[14px] font-roboto-mono font-thin tracking-tighter leading-none space-y-1.5 pb-2 pt-5">
          <li>Focused on core subjects relevant to engineering.</li>
          <li>
            Strengthened analytical thinking and logical reasoning skills.
          </li>
          <li>Prepared for competitive exams and technical career paths.</li>
        </ul>
      </div>

      <div className="text-white flex flex-col justify-between px-16 border-y border-dashed border-white/30">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-roboto-mono text-[18px] font-bold tracking-tighter">
            Secondary School — Aryam Educational Academy
          </h2>
          <Button href="class10result.pdf" className="p-1.5 mt-1.5">
            <FileIcon />
          </Button>
        </div>
        <h3 className="font-roboto-mono font-bold text-[16px] text-white/60 tracking-tighter leading-none">
          A2 Grade • Percentile Rank: 94.28
        </h3>
        <ul className="list-disc text-white/80 text-[14px] font-roboto-mono font-thin tracking-tighter leading-none space-y-1.5 pb-2 pt-5">
          <li>Built strong foundations in science and mathematics.</li>
          <li>Actively participated in academic and school activities.</li>
          <li>Developed early interest in technology and problem-solving.</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;

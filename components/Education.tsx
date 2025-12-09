import React from "react";
import TopLeft from "./Lcorner/TopLeft";
import BottomRight from "./Lcorner/BottomRight";
import Button from "./ui_components/Button";
import FileIcon from "./Icons/FileIcon";

const Education = () => {
  return (
    <div className="py-3 md:py-6 flex flex-col gap-3 md:gap-4">
      <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
        <h2 className="font-roboto-mono font-bold tracking-tighter text-[18px] md:text-[24px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
          Education
          <TopLeft />
          <BottomRight />
        </h2>
      </div>
      <Information />
    </div>
  );
};

export default Education;

export const Information = () => {
  const educationData = [
    {
      title:
        "B.Tech — Charotar University of Science and Technology (CHARUSAT)",
      file: "/ClgResult.pdf",
      stats: "Current CGPA: 9.14 • 3rd Year",
      list: [
        "Pursuing a Bachelor's degree in technology with strong academic performance.",
        "Building expertise in software development, frontend engineering, and practical projects.",
        "Engaged in hands-on learning, teamwork, and real-world problem-solving.",
      ],
    },
    {
      title: "Higher Secondary School — Aryam Educational Academy",
      file: "/12marksheet.pdf",
      stats: "Overall Percentile: 95.19",
      list: [
        "Focused on core subjects relevant to engineering.",
        "Strengthened analytical thinking and logical reasoning skills.",
        "Prepared for competitive exams and technical career paths.",
      ],
    },
    {
      title: "Secondary School — Aryam Educational Academy",
      file: "/class10result.pdf",
      stats: "A2 Grade • Percentile Rank: 94.28",
      list: [
        "Built strong foundations in science and mathematics.",
        "Actively participated in academic and school activities.",
        "Developed early interest in technology and problem-solving.",
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {educationData.map((item, index) => (
        <div
          key={index}
          className={`text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30`}
        >
          <div className="flex justify-between items-center w-full">
            <h2
              className={`font-roboto-mono text-[12px] md:text-[18px] w-75 md:w-full leading-3 md:leading-normal font-bold tracking-tighter hover:bg-white/10 transition-all duration-100 cursor-default`}
            >
              {item.title}
            </h2>

            <Button href={item.file} className="p-1 md:p-1.5 mt-1.5">
              <FileIcon className="size-3 md:size-4" />
            </Button>
          </div>

          <h3
            className={`font-roboto-mono font-bold text-[12px] md:text-[16px] text-white/60 tracking-tighter md:leading-none hover:bg-white/10 transition-all duration-100 cursor-default`}
          >
            {item.stats}
          </h3>

          <ul
            className={`list-disc text-white/80 text-[10px] md:text-[14px] font-roboto-mono font-thin tracking-tighter leading-none space-y-1.5 pb-2 px-1 md:px-0 mt-3 md:mt-5 hover:bg-white/10 transition-all duration-100`}
          >
            {item.list.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

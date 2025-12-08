import React from "react";
import Image from "next/image";
import LocationIcon from "./Icons/LocationIcon";
import MailIcon from "./Icons/MailIcon";
import GetintouchIcon from "./Icons/GetintouchIcon";
import TopLeft from "./Lcorner/TopLeft";
import BottomLeft from "./Lcorner/BottomLeft";
import BottomRight from "./Lcorner/BottomRight";
import TopRight from "./Lcorner/TopRight";

const Hero2 = () => {
  const info = [
    { icon: <LocationIcon />, text: "Surat, Gujarat, IN" },
    {
      icon: <MailIcon />,
      text: "pmalay694@gmail.com",
    },
    {
      icon: <GetintouchIcon />,
      text: "Get in touch",
    },
  ];

  return (
    <div className="w-full h-65 text-8xl text-white flex items-center justify-center">
      <div className="w-1/3 h-full font-roboto-mono tracking-tight flex flex-col justify-center gap-8">
        <div className="w-full border-y border-dashed border-white/50 flex">
          <div className="flex-1"></div>
          <div className="text-sm border-l border-dashed border-white/50 flex flex-col p-2 justify-center leading-none gap-1 relative">
            <span className="inline-block text-[24px] font-thin">Myself,</span>
            <h1 className="whitespace-nowrap text-[30px] font-bold">
              Malay Patel
            </h1>
            <TopLeft />
            <BottomLeft />
          </div>
        </div>
        <div className="w-full border-y border-dashed border-white/50 flex">
          <div className="text-sm flex flex-col justify-center p-2 leading-none gap-1 relative">
            <span className="inline-block text-[24px] font-thin">
              Fullstack
            </span>
            <h1 className="text-[30px] font-bold">Developer</h1>
            <TopRight />
            <BottomRight />
          </div>
          <div className="border-l border-dashed border-white/50 flex-1"></div>
        </div>
      </div>

      <div className="w-1/3 h-full relative border-x border-dashed border-white/50">
        <Image src="/pic3.png" alt="Description" fill className="object-cover saturate-0 hover:saturate-150 transition-all duration-500" />
      </div>

      <div className="w-1/3 h-full flex flex-col justify-around text-sm font-roboto-mono font-bold text-white/50 text-[18px] tracking-tight">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-y border-dashed border-white/50"
          >
            <div className="border-r border-dashed border-white/50 size-14 p-4 flex items-center justify-center relative">
              {item.icon}
              <TopRight />
              <BottomRight />
            </div>
            <h1 className="p-3">{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero2;

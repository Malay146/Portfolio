import React from "react";
import Image from "next/image";
import LocationIcon from "./Icons/LocationIcon";
import MailIcon from "./Icons/MailIcon";
import GetintouchIcon from "./Icons/GetintouchIcon";
import TopLeft from "./Lcorner/TopLeft";
import BottomLeft from "./Lcorner/BottomLeft";
import BottomRight from "./Lcorner/BottomRight";
import TopRight from "./Lcorner/TopRight";
import Link from "next/link";

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
    <div className="w-full h-45 md:h-65 text-8xl text-white flex items-center justify-center">
      <div className="w-1/3 h-full font-roboto-mono tracking-tight flex flex-col justify-center gap-8">
        <div className="w-full border-y border-dashed border-white/50 flex">
          <div className="md:flex-1"></div>
          <div className="text-sm border-l border-dashed border-white/50 flex flex-col p-2 justify-center leading-none gap-1 relative hover:bg-white/20  transition-all duration-100 cursor-default">
            <span className="inline-block text-[16px] md:text-[24px] font-thin">
              Myself,
            </span>
            <h1 className="whitespace-nowrap text-[21px] md:text-[30px] font-bold">
              Malay Patel
            </h1>
            <TopLeft />
            <BottomLeft />
            {/* <TopRight className="md:hidden" />
            <BottomRight className="md:hidden" /> */}
          </div>
        </div>
        <div className="w-full border-y border-dashed border-white/50 flex">
          <div className="text-sm flex-1 md:flex flex-col justify-center p-2 leading-none gap-1 relative hover:bg-white/20 transition-all duration-100 cursor-default border-r border-dashed border-white/50">
            <span className="inline-block text-[16px] md:text-[24px] font-thin">
              Fullstack
            </span>
            <h1 className="text-[21px] md:text-[30px] font-bold">Developer</h1>
            <TopRight />
            <BottomRight />
          </div>
          <div className="md:flex-1"></div>
        </div>
      </div>

      <div className="w-1/3 h-full relative border-x border-dashed border-white/50">
        <Image
          src="/pic2.png"
          alt="Description"
          fill
          className="object-cover filter saturate-0 hover:saturate-150 transition-all duration-500"
        />
      </div>

      <div className="w-1/3 h-full flex flex-col justify-around text-sm font-roboto-mono font-bold text-white/50 text-[18px] tracking-tight">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-y border-dashed border-white/50 "
          >
            <div className="border-r border-dashed border-white/50 size-8 md:size-14 p-2 md:p-4 flex items-center justify-center relative hover:bg-white/20 transition-all duration-100 cursor-default">
              {item.text === "Get in touch" ? (
                <>
                  <Link
                    href="mailto:pmalay694@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <GetintouchIcon className="size-4 md:size-6" />
                  </Link>
                </>
              ) : (
                item.icon
              )}
              <TopRight className="size-2 md:size-4" />
              <BottomRight className="size-2 md:size-4" />
            </div>

            {item.text === "Get in touch" ? (
              <Link href="mailto:pmalay694@gmail.com" target="_blank" rel="noopener noreferrer">
                <h1 className="p-1 font-normal md:font-bold md:p-3 text-white/80 md:text-white/50 text-[8px] tracking-tighter md:text-[16px] lg:text-[18px] whitespace-nowrap hover:text-white cursor-pointer">
                  {item.text}
                </h1>
              </Link>
            ) : (
              <h1 className="p-1 font-normal md:font-bold md:p-3 text-white/80 md:text-white/50 text-[8px] tracking-tighter md:text-[16px] lg:text-[18px] whitespace-nowrap">
                {item.text}
              </h1>
            )}

            {/* <h1 className="p-1 font-normal md:font-bold md:p-3 text-white/80 md:text-white/50 text-[8px] tracking-tighter md:text-[16px] lg:text-[18px] whitespace-nowrap">
              {item.text}
            </h1> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero2;

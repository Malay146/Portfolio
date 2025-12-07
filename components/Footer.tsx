import React from "react";

const Footer = () => {
  return (
    <div className="text-white flex flex-col items-center p-8">
      <h1 className="font-doto text-[275px] tracking-tighter leading-none bg-linear-to-b from-black/80 to-white bg-clip-text text-transparent">
        MALAY
      </h1>
      <div className="font-roboto-mono flex flex-col  text-center gap-2 text-sm md:text-base tracking-tight mt-10">
        <p className="text-white/80 font-light text-[16px]">
          Crafted at 2AM by{" "}
          <span className="inline-block text-white font-bold">MalayPatel</span>
        </p>
        <p className="text-white/60 text-[14px]">
          “Powered by creativity, fueled by caffeine and created in dark mode.”
        </p>
        <p className="text-white/60 text-[14px]">
          <span className="inline-block text-2xl leading-none">&copy;</span> 2025. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

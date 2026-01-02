import React from "react";
import SunIcon from "./Icons/SunIcon";
import VolumeIcon from "./Icons/VolumeIcon";

const Navbar = () => {
  const navItems = ["Home", "Projects", "Crafts", "Blog", "|", <SunIcon key="sun" />, <VolumeIcon key="volume" />];
  return (
    <div className="bg-[#1F1F1F] text-white/60 font-inter border-2 border-[#555555] rounded-lg flex justify-between items-center gap-4 px-4 py-2 fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.15),inset_-1px_-1px_4px_rgba(255,255,255,0.15)] leading-none">

      {navItems.map((item, index) => (
        <p key={index} className="cursor-pointer hover:text-white font-bold">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Navbar;

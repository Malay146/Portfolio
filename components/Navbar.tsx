import React from "react";
import Button from "./ui_components/Button";
import LinkedInIcons from "./Icons/LinkedInIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import GithubIcon from "./Icons/GithubIcon";
import MoonIcon from "./Icons/MoonIcon";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { name: "Blog", href: "#" },
    {
      name: <LinkedInIcons />,
      href: "https://www.linkedin.com/in/malay-patel-b154512a1/",
    },
    {
      name: <TwitterIcon />,
      href: "https://twitter.com/pmalay694",
    },
    {
      name: <GithubIcon />,
      href: "https://github.com/Malay146",
    },
  ];

  return (
    <div className="w-full flex justify-between items-center space-x-3 text-white text-sm border-b border-white/50 p-4">
      {/* Time and Temp */}
      <div className="flex gap-4">
        <div className="Time flex flex-col">
          <div className="font-inter font-bold text-[14px]">Thu 4 Dec</div>
          <div className="font-roboto-condensed font-thin text-[28px] text-white/50 leading-none tracking-tighter">2:37 AM</div>
        </div>
        <div className="Temp flex flex-col">
          <div className="font-inter font-bold text-[14px]"><MoonIcon /> 18°C</div>
          <div className="font-roboto-condensed font-thin text-[28px] text-white/50 leading-none tracking-tighter">Clear</div>
        </div>
      </div>

      {/* YT Music */}
      <div className="">
        <Image src="/ytplayer.png" alt="YT Music" width={220} height={220} />
      </div>

      {/* Links */}
      <div className="flex space-x-1.5">
        {links.map((link) => (
          <Button key={link.href} href={link.href}>
                {link.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

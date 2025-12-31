"use client";
import React, { JSX, useEffect, useState } from "react";
import Button from "./ui_components/Button";
import LinkedInIcons from "./Icons/LinkedInIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import GithubIcon from "./Icons/GithubIcon";
import MoonIcon from "./Icons/MoonIcon";
import Image from "next/image";
import SunIcon from "./Icons/SunIcon";
import CloudIcon from "./Icons/CloudIcon";
import RainIcon from "./Icons/RainIcon";
import YoutubeMusicIcon from "./Icons/YoutubeMusicIcon";
import PlayIcon from "./Icons/PlayIcon";
import { usePathname } from "next/navigation";
import TransitionLink from "./Transition/TransitionLink";

const Widgets = () => {

  const pathname = usePathname();
  const [dateStr, setDateStr] = useState<string>("");
  const [timeStr, setTimeStr] = useState<string>("");

  const [temp, setTemp] = useState<number | null>(null);
  const [condition, setCondition] = useState<string>("");
  const [icon, setIcon] = useState<JSX.Element>(<MoonIcon />);

  const [track, setTrack] = useState<any>(null);

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const CITY = "Surat"; // change to your city

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // Format: Thu 4 Dec
      const dateFormatted = now.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        timeZone: "Asia/Kolkata",
      });

      // Format: 2:37 AM IST (AM/PM in CAPS)
      let timeFormatted = now.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });

      // Force AM/PM uppercase
      timeFormatted = timeFormatted.toUpperCase() + " IST";

      setDateStr(dateFormatted);
      setTimeStr(timeFormatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();

        const temperature = Math.round(data.main.temp);
        const weather = data.weather[0].main; // Clear, Clouds, Rain, etc.

        const now = Date.now() / 1000; // current time in seconds
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;

        const isDay = now > sunrise && now < sunset;

        // 🌤 Select icon based on condition + day/night
        let selectedIcon;

        if (weather === "Clear") {
          selectedIcon = isDay ? <SunIcon /> : <MoonIcon />;
        } else if (weather === "Clouds") {
          selectedIcon = <CloudIcon />;
        } else if (["Rain", "Drizzle", "Thunderstorm"].includes(weather)) {
          selectedIcon = <RainIcon />;
        } else if (["Mist", "Fog", "Haze", "Dust", "Smoke"].includes(weather)) {
          selectedIcon = <CloudIcon />;
        } else {
          selectedIcon = isDay ? <SunIcon /> : <MoonIcon />;
        }

        setTemp(temperature);
        setCondition(weather);
        setIcon(selectedIcon);
      } catch (err) {
        console.error("Weather error:", err);
      }
    }

    fetchWeather();

    // Auto-refresh every 10 minutes
    const interval = setInterval(fetchWeather, 1000 * 60 * 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchTrack = async () => {
      const res = await fetch("/api/lastfm");
      const data = await res.json();
      setTrack(data);
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 15000); // refresh every 15s

    return () => clearInterval(interval);
  }, []);

  if (!track) return <div>Loading…</div>;

  const links = [
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
    <div className="w-full flex justify-between items-center space-x-3 text-white text-sm border-x border-b border-white lg:border-x-0 lg:border-b lg:border-white p-4">
      {/* Time and Temp */}
      <div className="flex gap-4">
        <div className="Time flex flex-col">
          <div className="font-inter font-bold text-[10px] md:text-[14px]">
            {dateStr}
          </div>
          <div className="font-roboto-condensed font-thin text-[20px] md:text-[24px] text-white/50 leading-none tracking-tighter">
            {timeStr}
          </div>
        </div>
        <div className="Temp md:flex flex-col md:visible hidden">
          <div className="font-inter font-bold text-[10px] md:text-[14px] gap-1 flex">
            {icon}
            {temp !== null ? `${temp}°C` : "--"}
          </div>
          <div className="font-roboto-condensed font-thin text-[18px] md:text-[24px] text-white/50 leading-none tracking-tighter">
            {condition}
          </div>
        </div>
      </div>

      {/* YT Music */}
      <div className="h-17 bg-zinc-900 rounded-2xl border border-white/30 md:flex gap-2 pl-1 pr-2  shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.1)] md:visible hidden">
        <div className="size-14 rounded-xl border border-white/30 relative overflow-hidden my-auto">
          {track.image && (
            <img
              src={track.image}
              alt={track.title}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <div className="flex flex-col justify-center font-inter gap-3 mr-3">
          <div className="flex items-center gap-1">
            <YoutubeMusicIcon className="size-4 inline-block" />
            <h1 className="leading-none text-[10px] text-white/50 tracking-tighter uppercase font-bold whitespace-nowrap">
              {track.nowPlaying ? "Now playing" : "Last played"}
            </h1>
          </div>

          <div className="ml-1">
            <h2 className="text-[12px] font-semibold leading-none tracking-tight truncate w-32 mb-0.5">
              {track.title}
            </h2>
            <p className="text-[11px] text-white/50 font-light tracking-tight leading-none truncate w-32 mb-0.5">
              {track.artist}
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Button href={track.url} className="p-1.5 hover:bg-zinc-900/10">
            <PlayIcon className="size-5" />
          </Button>
        </div>
      </div>

      {/* Links */}
      <div className="flex space-x-1.5">
        {pathname === "/" ? (
          <TransitionLink href="/blogs">
              <Button
                target="_self"
                className="text-sm md:text-md tracking-tighter"
              >
                Blog
              </Button>
          </TransitionLink>
        ) : pathname === "/blogs" ? (
          <TransitionLink href="/">
            <Button
              target="_self"
              className="text-sm md:text-md tracking-tighter"
            >
              Home
            </Button>
          </TransitionLink>
        ) : null}

        {links.map((link) => (
          <Button key={link.href} href={link.href}>
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Widgets;

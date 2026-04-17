import React from "react";
import Image from "next/image";
import {
  DashedLineContainer,
  DashedHeader,
} from "@/components/ui/dashed-containers";

const H = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block font-bold text-white">{children}</span>
);

const experiences = [
  {
    company: "Oceanlab Technology",
    role: "Design Engineer",
    duration: "Jan 2026 — Apr 2026",
    logo: null, // TODO: Replace with actual logo path e.g. "/logos/oceanlab.png"
    points: [
      <>Contributed to <H>open-source</H> projects, building and shipping <H>production-ready</H> UI components.</>,
      <>Designed and developed <H>7+ animated bento grid</H> layouts with complex interaction patterns.</>,
      <>Created <H>5 fully reusable</H> animated components used across multiple projects.</>,
      <>Built <H>20+ polished UI components</H> following design system standards.</>,
    ],
  },
  {
    company: "DigiEsale",
    role: "Web Developer Intern",
    duration: "May 2025 — Jun 2025",
    logo: null, // TODO: Replace with actual logo path e.g. "/logos/digiesale.png"
    points: [
      <>Built <H>responsive landing pages</H> with <H>pixel-perfect</H> attention to design specifications.</>,
      <>Improved application <H>performance</H> through optimization techniques and <H>efficient code</H> practices.</>,
      <>Collaborated with <H>cross-functional teams</H> to deliver features on tight deadlines.</>,
      <>Gained hands-on experience with <H>performance profiling</H>, responsive design, and <H>team workflows</H>.</>,
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-3 md:py-6 flex flex-col gap-3 md:gap-4">
      <DashedLineContainer>
        <DashedHeader>Experience</DashedHeader>
      </DashedLineContainer>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="text-white flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30"
          >
            {/* Header row: Logo + Company/Role + Duration */}
            <div className="flex items-center gap-3 md:gap-4 w-full py-1 md:py-0">
              {/* Company Logo Placeholder */}
              <div className="shrink-0 size-8 md:size-11 rounded-md md:rounded-lg border border-dashed border-white/30 bg-white/5 flex items-center justify-center overflow-hidden">
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={44}
                    height={44}
                    className="object-contain size-full p-1"
                  />
                ) : (
                  <span className="font-roboto-mono font-bold text-white/30 text-[10px] md:text-xs leading-none select-none">
                    {exp.company
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                )}
              </div>

              {/* Company + Role */}
              <div className="flex-1 min-w-0">
                <h2 className="font-roboto-mono text-[12px] md:text-[18px] font-bold tracking-tighter hover:bg-white/10 transition-all duration-100 cursor-default leading-4 md:leading-normal">
                  {exp.company}
                </h2>
                <p className="font-roboto-mono text-[10px] md:text-[14px] text-white/60 tracking-tighter font-light leading-3 md:leading-normal">
                  {exp.role}
                </p>
              </div>

              {/* Duration */}
              <span className="shrink-0 font-roboto-mono text-[8px] md:text-[12px] text-white/40 tracking-tight font-light hover:bg-white/10 transition-all duration-100 cursor-default">
                {exp.duration}
              </span>
            </div>

            {/* Bullet points */}
            <ul className="list-disc text-white/80 text-[10px] md:text-[14px] font-roboto-mono font-thin tracking-tighter leading-none space-y-1.5 pb-2 px-1 md:px-0 mt-2 md:mt-3 hover:bg-white/10 transition-all duration-100">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
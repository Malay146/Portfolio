import React from "react";
import { DashedHeader, DashedLineContainer } from "@/components/ui/dashed-containers";
import { TechStackDisplay, defaultTechStackList } from "@/components/ui/tech-stack";

const TechnologyStack = () => {
  return (
    <div className="py-3 md:py-6 flex flex-col gap-3 md:gap-4">
      <DashedLineContainer className="px-6 md:px-16">
        <DashedHeader>Technology Stack</DashedHeader>
      </DashedLineContainer>
      <TechStackDisplay techNames={defaultTechStackList} containerClassName="p-1 md:p-3 border-y border-dashed border-white/30" />
    </div>
  );
};

export default TechnologyStack;

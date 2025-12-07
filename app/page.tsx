import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import StripGridHorizontal from "@/components/StripGridHorizontal";
import StripGridVertical from "@/components/StripGridVertical";
import TechnologyStack from "@/components/TechnologyStack";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="max-w-5xl min-h-full mx-auto flex">
        <StripGridVertical />
        <div className="w-full">
          <Navbar />
          <Hero1 />
          <Hero2 />
          <StripGridHorizontal className="h-12" />
          <AboutMe />
          <StripGridHorizontal className="h-8" />
          <Experience />
          <StripGridHorizontal className="h-8" />
          <TechnologyStack />
          <StripGridHorizontal className="h-8" />
        </div>
        <StripGridVertical />
      </div>
    </div>
  );
}

import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Widgets from "@/components/Widgets";
import Projects from "@/components/Projects";
import StripGridHorizontal from "@/components/StripGridHorizontal";
import StripGridVertical from "@/components/StripGridVertical";
import TechnologyStack from "@/components/TechnologyStack";
import Crafts from "@/components/crafts";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Malay Patel",
    url: "https://malaypatel.com",
    jobTitle: "Fullstack Developer & UI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: ["https://github.com/Malay146"],
    knowsAbout: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Frontend Development",
      "UI Engineering",
    ],
  };

  return (
    <div className="w-full border-x border-white flex flex-col lg:border-x-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero1 />
      <Hero2 />
      <StripGridHorizontal className="h-10 md:h-12" />
      <AboutMe />
      <StripGridHorizontal className="h-6 md:h-8" />
      <Experience />
      <StripGridHorizontal className="h-6 md:h-8" />
      <Projects />
      <StripGridHorizontal className="h-6 md:h-8" />
      <Crafts />
      <StripGridHorizontal className="h-6 md:h-8" />
      <TechnologyStack />
      <StripGridHorizontal className="h-6 md:h-8" />
      <Education />
    </div>
  );
}

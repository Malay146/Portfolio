export interface Project {
  id: string;
  imageSrc: string;
  imageLink: string;
  webLink: string;
  githubLink: string;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Upcoming";
  techstack: string[];
}

export const projects: Project[] = [
  {
    id: "uiarchives",
    imageSrc: "/uiarchivesnew.png",
    imageLink: "https://uiarchives.com",
    webLink: "https://uiarchives.com",
    githubLink: "https://github.com/Malay146/UIArchives",
    title: "UIArchives",
    description:
      "UIArchives is your centralized hub for everything frontend — a curated collection of tools, frameworks, components, and design resources that streamline your workflow. Just search what you need and instantly discover the best solutions to build faster, design smarter, and create with confidence.",
    status: "Completed",
    techstack: [
      "ReactJS",
      "NextJS",
      "Typescript",
      "Vercel",
      "TailwindCSS",
      "GSAP",
      "GitHub",
    ],
  },
  {
    id: "portfolio",
    imageSrc: "/portfolionew.png",
    imageLink: "https://portfolio-eta-fawn-ou8buy1iq8.vercel.app/",
    webLink: "https://portfolio-eta-fawn-ou8buy1iq8.vercel.app/",
    githubLink: "https://github.com/Malay146/Portfolio",
    title: "Portfolio",
    description:
      "A modern dark-aesthetic portfolio designed with minimal UI, crisp typography, and subtle animations to highlight my projects and development approach.",
    status: "Completed",
    techstack: [
      "ReactJS",
      "NextJS",
      "Typescript",
      "Vercel",
      "TailwindCSS",
      "GitHub",
    ],
  },
  {
    id: "Solar System Explorer",
    imageSrc: "/solarsystem.png",
    imageLink: "https://solar-system-five-psi.vercel.app/",
    webLink: "https://solar-system-five-psi.vercel.app/",
    githubLink: "https://github.com/Malay146/SolarSystem",
    title: "Solar System Explorer",
    description:
      "An interactive 3D web experience that lets users explore the solar system in 3D, providing detailed information about each planet along with engaging visuals and animations.",
    status: "In Progress",
    techstack: ["Three.js", "Node.js", "Vercel", "TailwindCSS", "GitHub"],
  },
];

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
    imageSrc: "/uiarchives.png",
    imageLink: "https://uiarchives.com",
    webLink: "https://uiarchives.com",
    githubLink: "https://github.com/Malay146/UIArchives",
    title: "UIArchives",
    description:
      "UIArchives is your centralized hub for everything frontend — a curated collection of tools, frameworks, components, and design resources that streamline your workflow. Just search what you need and instantly discover the best solutions to build faster, design smarter, and create with confidence. ",
    status: "Completed",
    techstack: [
      "ReactJS",
      "NextJS",
      "Typescript",
      "Vercel",
      "TailwindCSS",
      "GSAP",
      "GitHub"
    ]
  },
];

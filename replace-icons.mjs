import fs from 'fs';

let contentProj = fs.readFileSync('e:/WEB-DEVELOPMENT/Projects/portfolio/components/Projects.tsx', 'utf8');

contentProj = contentProj.replace(/import ToolTip from "\.\/ToolTip";\n/, '');
contentProj = contentProj.replace(/import ReactIcon from "\.\/Icons\/ReactIcon";\n/, `import { TechStackDisplay } from "./ui_components/tech-stack";\n`);
contentProj = contentProj.replace(/import NextJSIcon from "\.\/Icons\/NextJSIcon";\n/, '');
contentProj = contentProj.replace(/import TypescriptIcon from "\.\/Icons\/TypescriptIcon";\n/, '');
contentProj = contentProj.replace(/import VercelIcon from "\.\/Icons\/VercelIcon";\n/, '');
contentProj = contentProj.replace(/import TailwindIcon from "\.\/Icons\/TailwindIcon";\n/, '');
contentProj = contentProj.replace(/import GSAPIcon from "\.\/Icons\/GSAPIcon";\n/, '');
contentProj = contentProj.replace(/import GithubTechIcon from "\.\/Icons\/GithubTechIcon";\n/, '');
contentProj = contentProj.replace(/import FirebaseIcon from "\.\/Icons\/FirebaseIcon";\n/, '');
contentProj = contentProj.replace(/import ExpressjsIcon from "\.\/Icons\/ExpressjsIcon";\n/, '');
contentProj = contentProj.replace(/import NodejsIcon from "\.\/Icons\/NodejsIcon";\n/, '');
contentProj = contentProj.replace(/import MongodbIcon from "\.\/Icons\/MongodbIcon";\n/, '');
contentProj = contentProj.replace(/import ThreejsIcon from "\.\/Icons\/ThreejsIcon";\n/, '');
contentProj = contentProj.replace(/import FigmaIcon from "\.\/Icons\/FigmaIcon";\n/, '');
contentProj = contentProj.replace(/import FramerMotionIcon from "\.\/Icons\/FramerMotionIcon";\n/, '');

contentProj = contentProj.replace(/export const techIcons: Record<string, JSX\.Element> = {[\s\S]*?};\n/, '');

const regexStacksArray = /  const stacks = \[[\s\S]*?\];\n/;
contentProj = contentProj.replace(regexStacksArray, '');

const projRegex = /<div className="flex items-center">\s*\{project\.techstack\.map\(\(tech\) => \([\s\S]*?<\/ToolTip>\s*\)\)\}\s*<\/div>/g;
contentProj = contentProj.replace(projRegex, `<TechStackDisplay techNames={project.techstack} containerClassName="justify-start gap-0 md:gap-0" wrapperClassName="size-6 md:size-10" iconSizeClassName="size-4 md:size-6" />`);

fs.writeFileSync('e:/WEB-DEVELOPMENT/Projects/portfolio/components/Projects.tsx', contentProj);
console.log('Projects.tsx done');


let contentTech = fs.readFileSync('e:/WEB-DEVELOPMENT/Projects/portfolio/components/TechnologyStack.tsx', 'utf8');

contentTech = contentTech.replace(/import ToolTip from "\.\/ToolTip";\n/, '');
contentTech = contentTech.replace(/import ReactIcon from "\.\/Icons\/ReactIcon";\n/, `import { TechStackDisplay, defaultTechStackList } from "./ui_components/tech-stack";\n`);
contentTech = contentTech.replace(/import NextJSIcon from "\.\/Icons\/NextJSIcon";\n/, '');
contentTech = contentTech.replace(/import TypescriptIcon from "\.\/Icons\/TypescriptIcon";\n/, '');
contentTech = contentTech.replace(/import VercelIcon from "\.\/Icons\/VercelIcon";\n/, '');
contentTech = contentTech.replace(/import TailwindIcon from "\.\/Icons\/TailwindIcon";\n/, '');
contentTech = contentTech.replace(/import GSAPIcon from "\.\/Icons\/GSAPIcon";\n/, '');
contentTech = contentTech.replace(/import FramerMotionIcon from "\.\/Icons\/FramerMotionIcon";\n/, '');
contentTech = contentTech.replace(/import FigmaIcon from "\.\/Icons\/FigmaIcon";\n/, '');
contentTech = contentTech.replace(/import ThreejsIcon from "\.\/Icons\/ThreejsIcon";\n/, '');
contentTech = contentTech.replace(/import GithubTechIcon from "\.\/Icons\/GithubTechIcon";\n/, '');
contentTech = contentTech.replace(/import MongodbIcon from "\.\/Icons\/MongodbIcon";\n/, '');
contentTech = contentTech.replace(/import NodejsIcon from "\.\/Icons\/NodejsIcon";\n/, '');
contentTech = contentTech.replace(/import ExpressjsIcon from "\.\/Icons\/ExpressjsIcon";\n/, '');
contentTech = contentTech.replace(/import FirebaseIcon from "\.\/Icons\/FirebaseIcon";\n/, '');

const techArray = /const stacks = \[[\s\S]*?\]\n/g;
contentTech = contentTech.replace(techArray, '');

const techDisplay = /<div className="text-white flex items-center justify-between p-1 md:p-3 border-y border-dashed border-white\/30">\s*\{stacks\.map\(\(stack\) => \([\s\S]*?<\/ToolTip>\s*\)\)\}\s*<\/div>/g;
contentTech = contentTech.replace(techDisplay, `<TechStackDisplay techNames={defaultTechStackList} containerClassName="p-1 md:p-3 border-y border-dashed border-white/30" />`);

fs.writeFileSync('e:/WEB-DEVELOPMENT/Projects/portfolio/components/TechnologyStack.tsx', contentTech);
console.log('TechnologyStack.tsx done');


let contentBlog = fs.readFileSync('e:/WEB-DEVELOPMENT/Projects/portfolio/app/blogs/my-portfolio-case-study/BlogClient.tsx', 'utf8');

contentBlog = contentBlog.replace(/import ToolTip from "@/components\/ToolTip";\n/, '');
contentBlog = contentBlog.replace(/import ReactIcon from "@/components\/Icons\/ReactIcon";\n/, `import { TechStackDisplay } from "@/components/ui_components/tech-stack";\n`);
contentBlog = contentBlog.replace(/import NextJSIcon from "@/components\/Icons\/NextJSIcon";\n/, '');
contentBlog = contentBlog.replace(/import TypescriptIcon from "@/components\/Icons\/TypescriptIcon";\n/, '');
contentBlog = contentBlog.replace(/import VercelIcon from "@/components\/Icons\/VercelIcon";\n/, '');
contentBlog = contentBlog.replace(/import TailwindIcon from "@/components\/Icons\/TailwindIcon";\n/, '');
contentBlog = contentBlog.replace(/import GSAPIcon from "@/components\/Icons\/GSAPIcon";\n/, '');
contentBlog = contentBlog.replace(/import GithubTechIcon from "@/components\/Icons\/GithubTechIcon";\n/, '');
contentBlog = contentBlog.replace(/import FramerMotionIcon from "@/components\/Icons\/FramerMotionIcon";\n/, '');

const blogArray = /  const stacks = \[[\s\S]*?\];\n/g;
contentBlog = contentBlog.replace(blogArray, '');

const blogDisplay = /\{stacks\.map\(\(stack\) => \([\s\S]*?<\/ToolTip>\s*\)\)\}/g;
contentBlog = contentBlog.replace(blogDisplay, `<TechStackDisplay techNames={["ReactJS", "NextJS", "Typescript", "Vercel", "TailwindCSS", "GSAP", "Framer Motion", "GitHub"]} containerClassName="px-0 w-full" />`);

fs.writeFileSync('e:/WEB-DEVELOPMENT/Projects/portfolio/app/blogs/my-portfolio-case-study/BlogClient.tsx', contentBlog);
console.log('BlogClient.tsx done');

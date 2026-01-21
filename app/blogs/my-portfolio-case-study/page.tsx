import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Portfolio Case Study — Building an Animated Site with Next.js",
  description:
    "A detailed case study on building my personal portfolio using Next.js, GSAP, Motion, Tailwind CSS, and Vercel, focusing on motion, performance, and architecture.",
  keywords: [
    "portfolio case study",
    "Next.js portfolio",
    "developer portfolio case study",
    "GSAP portfolio animation",
    "frontend portfolio architecture",
  ],

  openGraph: {
    title: "Portfolio Case Study — Next.js, GSAP & Motion",
    description:
      "How I designed and built my portfolio using Next.js, GSAP, Motion, and Tailwind with a focus on performance and motion systems.",
    url: "https://malaypatel.com/blogs/my-portfolio-case-study",
    siteName: "Malay Patel Portfolio",
    images: [
      {
        url: "/og/portfolio-case-study.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Case Study by Malay Patel",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio Case Study — Next.js & GSAP",
    description:
      "A deep dive into the architecture and motion system behind my portfolio.",
    images: ["/og/portfolio-case-study.png"],
  },
};

export default function Page() {
  return <BlogClient />;
}

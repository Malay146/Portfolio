import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Next.js Page Transitions with GSAP (Entry & Exit Animations)",
  description:
    "Learn how to build smooth page transitions in Next.js using GSAP with entry and exit animations, clean architecture, and performance-friendly routing.",
  keywords: [
    "Next.js page transition",
    "GSAP page transition",
    "Next.js GSAP animation",
    "entry exit animation Next.js",
    "Next.js App Router animation",
  ],

  openGraph: {
    title: "Next.js Page Transitions with GSAP",
    description:
      "A production-ready guide to building smooth entry and exit page transitions in Next.js using GSAP.",
    url: "https://malaypatel.com/blogs/nextjs-page-transition-gsap",
    siteName: "Malay Patel Portfolio",
    images: [
      {
        url: "/og/nextjs-gsap-transition.png",
        width: 1200,
        height: 630,
        alt: "Next.js Page Transitions with GSAP",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next.js Page Transitions with GSAP",
    description:
      "Smooth entry and exit page transitions in Next.js using GSAP.",
    images: ["/og/nextjs-gsap-transition.png"],
  },
};
export default function Page() {
  return <BlogClient />;
}

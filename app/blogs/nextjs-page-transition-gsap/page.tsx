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
  alternates: {
    canonical: "https://malaypatel.com/blogs/nextjs-page-transition-gsap",
  },

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Next.js Page Transitions with GSAP (Entry & Exit Animations)",
    description:
      "Learn how to build smooth page transitions in Next.js using GSAP with entry and exit animations, clean architecture, and performance-friendly routing.",
    author: {
      "@type": "Person",
      name: "Malay Patel",
      url: "https://malaypatel.com",
    },
    publisher: {
      "@type": "Person",
      name: "Malay Patel",
      logo: {
        "@type": "ImageObject",
        url: "https://malaypatel.com/favicon.ico",
      },
    },
    datePublished: "2024-02-27T00:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://malaypatel.com/blogs/nextjs-page-transition-gsap",
    },
    image: "https://malaypatel.com/og/nextjs-gsap-transition.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}

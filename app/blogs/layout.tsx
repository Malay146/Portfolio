import BlogsLinks from "@/components/blogs/blogs-links";
import BottomRight from "@/components/Lcorner/BottomRight";
import TopLeft from "@/components/Lcorner/TopLeft";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Malay Patel",
  description:
    "Technical blogs on Next.js, GSAP animations, motion systems, and frontend architecture by Malay Patel.",
  keywords: [
    "Blogs",
    "Next.js",
    "GSAP",
    "Frontend Architecture",
    "Web Development",
    "Case Studies",
    "Animations",
    "Motion Systems",
  ],
  authors: [{ name: "Malay Patel", url: "https://malaypatel.com" }],
  creator: "Malay Patel",
  publisher: "Malay Patel",
  alternates: {
    canonical: "https://malaypatel.com/blogs",
  },
  openGraph: {
    title: "Blogs | Malay Patel",
    description:
      "Explore comprehensive technical blogs on Next.js, GSAP styling, frontend architecture, and animation by Malay Patel.",
    url: "https://malaypatel.com/blogs",
    siteName: "Malay Patel Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blogs by Malay Patel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Malay Patel",
    description:
      "Technical blogs on Next.js, GSAP animations, motion systems, and frontend architecture.",
    images: ["/og-image.png"],
  },
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full border-x border-white flex flex-col lg:border-x-0">
      <BlogsLinks />
      <div className="flex-1">{children}</div>
    </div>
  );
}

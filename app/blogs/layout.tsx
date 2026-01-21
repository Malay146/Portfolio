import BlogsLinks from "@/components/blogs/blogs-links";
import BottomRight from "@/components/Lcorner/BottomRight";
import TopLeft from "@/components/Lcorner/TopLeft";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description:
    "Technical blogs on Next.js, GSAP animations, motion systems, and frontend architecture.",
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

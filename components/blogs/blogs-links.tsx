"use client";
import React from "react";
import { DashedHeader, DashedLineContainer } from "@/components/ui/dashed-containers";
import Link from "next/link";
import { useHoverSound } from "@/hooks/useHoverSound";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const BlogsLinks = () => {
  const links = [
    {
      href: "/blogs/nextjs-page-transition-gsap",
      text: "Next.js page transition with entry and exit animations using GSAP",
    },
    {
      href: "/blogs/my-portfolio-case-study",
      text: "My Portfolio Case Study",
    },
  ];

  const pathname = usePathname();

  // 1. Check if current route matches any blog link
  const hasActiveMatch = links.some((link) => pathname.startsWith(link.href));

  // 2. Default blog slug
  const defaultBlog = "/blogs/nextjs-page-transition-gsap";

  const { play } = useHoverSound();
  return (
    <div className=" pt-3 md:pt-6 flex flex-col gap-3 md:gap-4">
      {/* Blog Title */}
      <DashedLineContainer>
        <DashedHeader>Blogs</DashedHeader>
      </DashedLineContainer>
      {/* Blog options */}
      <div className="text-white/70 flex flex-col justify-between px-4 md:px-16 border-y border-dashed border-white/30 p-1">
        {links.map((link, index) => {
          const isActive =
            pathname.startsWith(link.href) ||
            (!hasActiveMatch && link.href === defaultBlog);

          return (
            <Link
              key={index}
              href={link.href}
              onMouseEnter={play}
              className={cn(
                "leading-none font-roboto-mono tracking-tighter text-[12px] md:text-[16px] font-light transition-all duration-100 cursor-pointer mt-1",
                isActive
                  ? "text-white font-medium hover:bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/10",
              )}
            >
              - {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsLinks;

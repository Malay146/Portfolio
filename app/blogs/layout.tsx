import BlogsLinks from "@/components/blogs/blogs-links";
import BottomRight from "@/components/Lcorner/BottomRight";
import TopLeft from "@/components/Lcorner/TopLeft";
import Link from "next/link";

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

import BottomRight from "@/components/Lcorner/BottomRight";
import TopLeft from "@/components/Lcorner/TopLeft";
import StripGridHorizontal from "@/components/StripGridHorizontal";

const page = () => {
  return (
    <div className="w-full min-h-[70vh] border-x border-white flex flex-col lg:border-x-0">
      <div className=" py-3 md:py-6 flex flex-col gap-3 md:gap-4">
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30">
          <h2 className="font-roboto-mono font-bold tracking-tighter text-[18px] md:text-[24px] px-2 border-x border-dashed border-white/30 relative hover:bg-white/10 transition-all duration-100 cursor-default">
            Blogs
            <TopLeft />
            <BottomRight />
          </h2>
        </div>
        <div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white/30 ">
          <h3 className="font-roboto-mono tracking-tighter text-[50px] md:text-[75px] lg:text-[100px] font-bold hover:bg-white/10 transition-all duration-100">
            Coming Soon
          </h3>
        </div>
        <StripGridHorizontal className="h-10 md:h-12" />
      </div>
    </div>
  );
};

export default page;

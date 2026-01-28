"use client";
import SpringArrow from "../ui_components/SpringArrow";

const dummyContent = [
  { id: 1, text: "Welcome to the Progressive Blur demonstration" },
  { id: 2, text: "This effect creates a smooth fade at the bottom" },
  { id: 3, text: "Combining gradient overlay with backdrop blur" },
  { id: 4, text: "Perfect for creating modern scrollable interfaces" },
  { id: 5, text: "The blur effect intensifies towards the bottom" },
  { id: 6, text: "Creating depth and visual hierarchy" },
  { id: 7, text: "Works seamlessly with both light and dark modes" },
  { id: 8, text: "Scroll down to see the progressive blur effect" },
  { id: 9, text: "The content gradually fades and blurs" },
  { id: 10, text: "Creating an elegant scroll indicator" },
  { id: 11, text: "Built with Tailwind CSS and Next.js" },
  { id: 12, text: "Try toggling between light and dark themes" },
  { id: 13, text: "Notice how the blur creates a natural boundary" },
  { id: 14, text: "This technique improves user experience" },
  { id: 15, text: "It subtly indicates more content below" },
  { id: 16, text: "The gradient transition is smooth and polished" },
  { id: 17, text: "Responsive design works on all screen sizes" },
  { id: 18, text: "Optimized for performance and accessibility" },
  { id: 19, text: "Keep scrolling to explore further" },
  { id: 20, text: "The effect remains consistent throughout" },
  { id: 21, text: "A modern approach to content presentation" },
  { id: 22, text: "Enhances visual appeal without distraction" },
  { id: 23, text: "You're almost at the end now" },
  { id: 24, text: "Thank you for exploring this demo!" },
];

const Page = () => {


  return (
    <div
    className="w-full flex items-center justify-center gap-4 relative p-2 sm:p-3 md:p-4">
      <div className="absolute top-1/2 -translate-y-1/2 -right-35 items-center justify-center gap-4 hidden md:flex">
        <SpringArrow className="size-10 text-zinc-500 animate-bounce-slow rotate-270" />
        <p className="font-roboto-mono text-sm text-zinc-500 tracking-tight">Scroll Down</p>
      </div>
      <div className="w-72 sm:w-80 md:w-88 lg:w-96 xl:w-100 h-96 sm:h-110 md:h-120 lg:h-130 xl:h-140 bg-zinc-900 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-colors relative overflow-hidden">
        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto p-2 sm:p-3 md:p-4 relative z-10 scrollbar-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight w-full text-center text-white font-roboto">
            Progressive Blur
          </h1>

          <div className="w-full mt-4 sm:mt-6 md:mt-8 text-center">
            {dummyContent.map((item) => (
              <p
                key={item.id}
                className="text-balance text-xs sm:text-sm md:text-md font-normal tracking-tighter leading-none px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-zinc-950 border border-zinc-700 rounded-md m-1 sm:m-1.5 md:m-2 text-white font-roboto-mono"
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>

        {/* Blur + Fade Overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 sm:h-36 md:h-40 lg:h-45 xl:h-50 z-20">
          {/* Soft fade */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/60 to-transparent" />

          {/* Progressive blur */}
          <div
            className="
              absolute inset-0
              backdrop-blur-sm
              mask-[linear-gradient(to_top,black_20%,black_30%,transparent_100%)]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

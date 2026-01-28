import { Expand, ExpandIcon, MoreHorizontal, Split, View } from "lucide-react";
const VercelFilter = () => {
  const Icons = [
    { icon: <Expand className="size-5" />, label: "Expand" },
    { icon: <Split className="size-5" />, label: "Split" },
    { icon: <MoreHorizontal className="size-5" />, label: "MoreHorizontal" },
  ];
  return (
    <div className="group p-4">
      <div className="group-hover:scale-100 scale-30 transition-all ease-in-out duration-150  w-fit flex gap-1 text-zinc-600 bg-zinc-50 rounded-full border border-zinc-300/80 px-1.5 py-1 group-hover:shadow-lg/5">
        {Icons.map((item, index) => (
          <div
            key={index}
            className="px-3 py-1.5 hover:bg-zinc-200/80 text-zinc-600 rounded-2xl flex items-center justify-center group-hover:scale-100 scale-0 transition-all ease-in-out duration-150 blur-sm group-hover:blur-none cursor-pointer"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VercelFilter;

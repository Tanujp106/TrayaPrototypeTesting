import svgPaths from "../imports/svg-0k8jgopwj0";

export function RootCauses() {
  const causes = [
    {
      title: "Nutrition",
      description: "Triggers scalp inflammation and weakens hair roots, leading to hair fall.",
      iconPath: svgPaths.p3efa45d0,
      bgColor: "#f3e1de"
    },
    {
      title: "Stress",
      description: "Causes inflammation in your scalp, weakens hair roots and causes hair fall",
      iconPath: svgPaths.p33fa9600,
      bgColor: "#f3e1de"
    }
  ];

  return (
    <div className="pt-2 pb-6 flex flex-col gap-4 max-w-[411px] mx-auto overflow-hidden font-['Inter',sans-serif]">
      <div className="px-4">
        <h2 className="text-[#404040] text-lg font-medium">Root Causes for hair fall</h2>
        <p className="text-[#8c8c8c] text-lg font-medium">Based on your answers</p>
      </div>
      
      <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory scroll-pl-4">
        {causes.map((cause, idx) => (
          <div key={idx} className="bg-white border border-[#F0F0F0] rounded-xl max-w-[240px] h-[128px] flex flex-col overflow-hidden shrink-0 snap-start">
            <div className={`bg-[${cause.bgColor}] px-3 py-2 flex items-center gap-2`} style={{ backgroundColor: cause.bgColor }}>
              <svg className="size-6" fill="none" viewBox="0 0 24 24">
                <path d={cause.iconPath} fill="#404040" />
              </svg>
              <p className="text-[#404040] text-base font-medium">{cause.title}</p>
            </div>
            <div className="p-3">
              <p className="font-medium leading-normal text-[14px] text-[#404040]">{cause.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import imgFrame46 from "figma:asset/7a9cf49e97f2291a22b0dcbab8a1e2b7cc58a69b.png";

export function HairNeeds() {
  const needs = [
    {
      title: "Restore Internal Balance",
      description:
        "Addresses internal imbalances that impact hair growth cycles.",
      renderImage: () => (
        <div className="relative rounded-[12px] shrink-0 size-[74px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
            <div className="absolute bg-[#ececec] inset-0 rounded-[12px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[12px]">
              <img
                alt=""
                className="absolute h-[227.56%] left-[-21.73%] max-w-none top-[-47.33%] w-[358.88%]"
                src={imgFrame46}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Strengthen Hair Follicles",
      description:
        "Improves follicle strength to support consistent, healthy growth.",
      renderImage: () => (
        <div className="relative rounded-[12px] shrink-0 size-[74px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
            <div className="absolute bg-[#ececec] inset-0 rounded-[12px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[12px]">
              <img
                alt=""
                className="absolute h-[207.29%] left-[-105.22%] max-w-none top-[-40.08%] w-[308.43%]"
                src={imgFrame46}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Improve Scalp Health",
      description:
        "Creates a balanced scalp environment for stronger regrowth.",
      renderImage: () => (
        <div className="bg-[#f0f0f0] overflow-clip relative rounded-[12px] shrink-0 size-[74px]">
          <div className="absolute h-[79px] left-0 top-[-2px] w-[74px]" data-name="image 566">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[207.19%] left-[-214.93%] max-w-none top-[-39.41%] w-[327.51%]"
                src={imgFrame46}
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full max-w-[411px] mx-auto py-6">
      <div className="w-full">
        <p className="leading-[22px] relative shrink-0 text-[#404040] text-[18px] font-medium w-full">
          What your hair needs to recover
        </p>
        <p className="leading-[20px] relative shrink-0 text-[#8c8c8c] text-[18px] font-medium w-full">
          Restoring your hair from inside out
        </p>
      </div>

      <div className="flex flex-col gap-[12px] w-full">
        {needs.map((need, idx) => (
          <div
            key={idx}
            className="bg-white relative rounded-[12px] shrink-0 w-full"
          >
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
                {need.renderImage()}
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter',sans-serif] font-medium gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap">
                  <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] w-full">
                    {need.title}
                  </p>
                  <p className="leading-[20px] relative shrink-0 text-[#8c8c8c] text-[14px] w-full">
                    {need.description}
                  </p>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-[#EDEBEB] border-solid inset-0 pointer-events-none rounded-[12px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

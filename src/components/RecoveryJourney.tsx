
import imgImage569 from "figma:asset/9146b2b9b1a022fac125cefabc01f078e9e1ca9a.png";
import imgImagePhotoroom11 from "figma:asset/fc2aeea309610e0283a71cc74d9facc60f7cb0c9.png";
import imgImagePhotoroom21 from "figma:asset/64ec4f0ff19da6d6a56dfb10e1e51dcc67055ab5.png";
import imgImagePhotoroom31 from "figma:asset/b5687d09dcc3f6abbe63c654ffa6f9f35e781243.png";
import imgImagePhotoroom41 from "figma:asset/f55ab9cc2a9ea07a2782871e45454aa66b5227d8.png";

const STEPS = [
  {
    month: "Month 1",
    title: "Visible dandruff reduction",
    description: "Dandruff clears up so your scalp is cleaner and less irritated.",
    image: imgImage569,
    bg: "bg-[#dedede]",
    imgStyle: { left: "-13px", top: "-10px", width: "85px", height: "85px" },
  },
  {
    month: "Month 2",
    title: "Visible dandruff reduction",
    description: "Your scalp becomes balanced and ready to support stronger hair growth.",
    image: imgImagePhotoroom11,
    bg: "bg-[#f9f0ef]",
    imgStyle: { left: "-13px", top: "-10px", width: "85px", height: "85px" },
  },
  {
    month: "Month 3",
    title: "Visible dandruff reduction",
    description: "New strong hair pushes weak hair out. Temporary shedding may occur for about 4 weeks.",
    image: imgImagePhotoroom21,
    bg: "bg-[#f9f0ef]",
    imgStyle: { left: "-13px", top: "-10px", width: "86px", height: "86px" },
  },
  {
    month: "Month 4",
    title: "Visible dandruff reduction",
    description: "Hair fall reduces as stronger roots hold hair firmly during combing, oiling, and washing.",
    image: imgImagePhotoroom31,
    bg: "bg-[#f9f0ef]",
    imgStyle: { left: "-13px", top: "-10px", width: "88px", height: "88px" },
  },
  {
    month: "Month 5",
    title: "Visible dandruff reduction",
    description: "Your hair grows at a healthy speed and starts feeling softer & smoother.",
    image: imgImagePhotoroom41,
    bg: "bg-[#f9f0ef]",
    imgStyle: { left: "-25px", top: "-17px", width: "109px", height: "109px" },
  },
  {
    month: "Month 6",
    title: "Visible dandruff reduction",
    description: "Your scalp starts feeling fuller as hairfall is less & hair growth is fast",
    image: imgImagePhotoroom41,
    bg: "bg-[#f9f0ef]",
    imgStyle: { left: "-23px", top: "-16px", width: "107px", height: "107px" },
  },
];

export function RecoveryJourney() {

  return (
    <div className="bg-white py-[24px] flex flex-col items-start w-full overflow-hidden font-['Inter',sans-serif]">
      {/* Header - Fixed */}
      <div className="pl-[16px] pr-[16px] mb-[20px] flex flex-col gap-[4px] items-start text-[18px] font-medium leading-[normal] text-center w-full">
        <p className="text-[#404040]">What your recovery journey looks like</p>
        <p className="text-[#8c8c8c]">Based on realistic recovery patterns</p>
      </div>

      {/* Scrollable Container */}
      <div className="w-full overflow-x-auto no-scrollbar pl-[16px]">
        <div className="flex flex-col gap-[16px] items-start relative min-w-max pb-4 pr-[16px]">
          {/* Timeline Row */}
          <div className="flex gap-[200px] items-start relative shrink-0">
            {/* Connecting Line */}
            <div className="absolute h-0 left-[86px] top-[15px] w-[1435px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1435 1">
                  <line stroke="#E2B4AD" x2="1465" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>

            {STEPS.map((step, idx) => (
              <div
                key={`month-${idx}`}
                className="bg-[#edd2ce] flex items-center justify-center px-[12px] py-[4px] relative rounded-[77px] shrink-0 border border-[#e2b4ad]"
              >
                <p className="font-medium leading-[22px] text-[#404040] text-[16px] text-center">
                  {step.month}
                </p>
              </div>
            ))}
          </div>

          {/* Cards Row */}
          <div className="flex gap-[26px] relative shrink-0 items-stretch">
            {STEPS.map((step, idx) => (
              <div
                key={`card-${idx}`}
                className="relative rounded-[12px] shrink-0 w-[260px] border border-[#edebeb] flex flex-col cursor-pointer transition-transform active:scale-[0.98]"
              >
                <div className="flex flex-col gap-[16px] items-start justify-center overflow-hidden p-[12px] relative rounded-[inherit] w-full h-full">
                  {/* Image Container */}
                  <div className={`${step.bg} overflow-hidden relative rounded-[12px] shrink-0 size-[60px]`}>
                    <div
                      className="absolute pointer-events-none"
                      style={step.imgStyle}
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover size-full"
                        src={step.image}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col font-medium gap-[4px] items-start w-full">
                    <p className="leading-[22px] text-[#404040] text-[16px] text-center">
                      {step.title}
                    </p>
                    <p className="leading-[20px] text-[#8c8c8c] text-[14px] w-full whitespace-pre-wrap">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}

import svgPaths from "./svg-pzk53sez4r";

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="info">
          <mask height="20" id="mask0_12_1409" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_12_1409)">
            <path d={svgPaths.p3c784300} fill="var(--fill-0, #404040)" id="info_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Visible results in 12 weeks</p>
      <Info />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] text-center">Hi Tanuj,</p>
      <Frame1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
      <Frame2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#404040] text-[16px] w-full whitespace-pre-wrap">
        <span className="leading-[22px]">{`You are showing early signs of `}</span>
        <span className="leading-[22px] text-[#c4695b]">hair thinning</span>
        <span className="leading-[22px]">{` linked to stress and hormonal imbalance.`}</span>
      </p>
    </div>
  );
}
import svgPaths from "./svg-i8jijxzucy";
import imgImagePhotoroom51 from "figma:asset/1707e174d182d2f0a2602a7c5e4839b03852d99d.png";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Step 1</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px]">Why we picked it?</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
      <div className="h-[188.209px] relative shrink-0 w-[188px]" data-name="image-Photoroom (5) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom51} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px]">Strengthen Follicles</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center min-h-px min-w-px not-italic relative">
      <p className="leading-[22px] relative shrink-0 text-[#ca8f4f] text-[16px]">₹267</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through relative shrink-0 text-[#8c8c8c] text-[14px]">₹540</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <mask height="20" id="mask0_12_1379" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_12_1379)">
            <path d={svgPaths.p115c8200} fill="var(--fill-0, #C4695B)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Check />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c4695b] text-[14px]">Added</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame3 />
      <div className="flex flex-row items-center self-stretch">
        <Frame5 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] w-full whitespace-pre-wrap">Defence shampoo</p>
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function ProductItem() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center p-[16px] relative rounded-[12px] size-full" data-name="Product Item">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame6 />
      <Frame7 />
    </div>
  );
}
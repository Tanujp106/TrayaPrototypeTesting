import svgPaths from "./svg-0k8jgopwj0";
import imgImage11 from "figma:asset/1eaf808b9c9f5258a94942d5e492c950b4ceb683.png";
import imgFrame46 from "figma:asset/7a9cf49e97f2291a22b0dcbab8a1e2b7cc58a69b.png";
import imgImagePhotoroom51 from "figma:asset/1707e174d182d2f0a2602a7c5e4839b03852d99d.png";
import imgImage40 from "figma:asset/725bd36b74bc4f30546e05b89c90b905eea5e1c2.png";
import imgGeminiGeneratedImageIzle3Hizle3HizlePhotoroom1 from "figma:asset/3c92514a81cfe8dc15834f05a31d39cd07f02438.png";
import imgImagePhotoroom1 from "figma:asset/c8861b364d7992414734c8097cb915d07b916910.png";
import imgImage569 from "figma:asset/9146b2b9b1a022fac125cefabc01f078e9e1ca9a.png";
import imgImagePhotoroom11 from "figma:asset/fc2aeea309610e0283a71cc74d9facc60f7cb0c9.png";
import imgImagePhotoroom21 from "figma:asset/64ec4f0ff19da6d6a56dfb10e1e51dcc67055ab5.png";
import imgImagePhotoroom31 from "figma:asset/b5687d09dcc3f6abbe63c654ffa6f9f35e781243.png";
import imgImagePhotoroom41 from "figma:asset/f55ab9cc2a9ea07a2782871e45454aa66b5227d8.png";
import imgImagePhotoroom61 from "figma:asset/a520b752cd6a1a62c0afd757a1b0896ffc07d634.png";
import imgImagePhotoroom42 from "figma:asset/241f454384bc2a49e31a7ca481caa7b03971d108.png";
import imgImage570 from "figma:asset/a9ca5be24b65331f3941b96977867a8bcda224f4.png";
import imgImage561 from "figma:asset/ec19e61995a7f55c477e74a162b5e96101401c30.png";

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="shopping_cart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="shopping_cart">
          <mask height="32" id="mask0_2_769" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2_769)">
            <path d={svgPaths.p141f4700} fill="var(--fill-0, #1A1A1A)" id="shopping_cart_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="h-[24px] relative shrink-0 w-[76px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <ShoppingCart />
      <div className="absolute left-[368px] size-[10px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #E24B4B)" id="Ellipse 12" r="5" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="info">
          <mask height="20" id="mask0_2_761" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_761)">
            <path d={svgPaths.p3c784300} fill="var(--fill-0, #404040)" id="info_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Visible results in 12 weeks</p>
      <Info />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] text-center">Hi Tanuj,</p>
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame81 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#404040] text-[16px] w-full whitespace-pre-wrap">
        <span className="leading-[22px]">{`You are showing early signs of `}</span>
        <span className="leading-[22px] text-[#c4695b]">hair thinning</span>
        <span className="leading-[22px]">{` linked to stress and hormonal imbalance.`}</span>
      </p>
    </div>
  );
}

function WaterDrop() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="water_drop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="water_drop">
          <mask height="28" id="mask0_2_748" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
          </mask>
          <g mask="url(#mask0_2_748)">
            <path d={svgPaths.p1562ed00} fill="var(--fill-0, #404040)" id="water_drop_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium items-center not-italic relative shrink-0 text-center">
      <p className="leading-[20px] relative shrink-0 text-[#404040] text-[14px]">Oily</p>
      <p className="leading-[normal] relative shrink-0 text-[#8c8c8c] text-[12px]">Hair type</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center px-[12px] relative shrink-0">
      <WaterDrop />
      <Frame80 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p879cf00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1c190e00} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p286b5380} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p6dc33f0} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.pf396c80} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p8f61300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium items-center not-italic relative shrink-0 text-center">
      <p className="leading-[20px] relative shrink-0 text-[#404040] text-[14px]">Digestion</p>
      <p className="leading-[normal] relative shrink-0 text-[#8c8c8c] text-[12px]">Additional Concern</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center px-[12px] relative shrink-0">
      <Frame />
      <Frame84 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame">
          <path d={svgPaths.p14194cf0} fill="var(--fill-0, #404040)" id="Vector" />
          <path d={svgPaths.p946ee00} fill="var(--fill-0, #404040)" id="Vector_2" />
          <path d={svgPaths.p376c3c40} fill="var(--fill-0, #404040)" id="Vector_3" />
          <path d={svgPaths.p356b2c40} fill="var(--fill-0, #404040)" id="Vector_4" />
          <path d={svgPaths.p270ff700} fill="var(--fill-0, #404040)" id="Vector_5" />
          <path d={svgPaths.p26fe4280} fill="var(--fill-0, #404040)" id="Vector_6" />
          <path d={svgPaths.p2eec7500} fill="var(--fill-0, #404040)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium items-center not-italic relative shrink-0 text-center">
      <p className="leading-[20px] relative shrink-0 text-[#404040] text-[14px]">Disturbed</p>
      <p className="leading-[normal] relative shrink-0 text-[#8c8c8c] text-[12px]">Sleep</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center px-[12px] relative shrink-0">
      <Frame3 />
      <Frame86 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame76 />
      <Frame82 />
      <Frame85 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px]">High chances of hair recovery</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-gradient-to-r from-[#dfbc95] h-[8px] relative rounded-[60px] shrink-0 to-[#f0e0cf] w-full">
      <div className="absolute flex h-[8px] items-center justify-center left-[83px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[8px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 0.8">
                <line id="Line 1" stroke="var(--stroke-0, #D5A572)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="7.6" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[8px] items-center justify-center left-[191px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[8px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 0.8">
                <line id="Line 1" stroke="var(--stroke-0, #D5A572)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="7.6" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[8px] items-center justify-center left-[281px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[8px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 0.8">
                <line id="Line 1" stroke="var(--stroke-0, #D5A572)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="7.6" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[34px] size-[16px] top-[-4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #EAD2B9)" id="Ellipse 11" r="6" stroke="var(--stroke-0, #D5A572)" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame89 />
      <Frame91 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-center w-full whitespace-pre-wrap">
      <p className="relative shrink-0 text-[#1a1a1a] w-[84px]">Stage 1</p>
      <p className="relative shrink-0 text-[#8c8c8c] w-[107px]">Stage 2</p>
      <p className="relative shrink-0 text-[#8c8c8c] w-[90px]">Stage 3</p>
      <p className="relative shrink-0 text-[#8c8c8c] w-[85px]">Stage 4</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame88 />
      <Frame92 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#f4e9dc] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] whitespace-pre-wrap">You are in Stage 1. It is an early and highly treatable stage when addressed consistently.</p>
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececec] border-solid border-t-[1.5px] inset-0 pointer-events-none" />
      <Frame90 />
      <Frame93 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame79 />
      <Frame87 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f9f0ef] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[12px] relative w-full">
          <Frame83 />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-start overflow-clip p-[12px] relative shrink-0 w-[411px]">
      <Frame4 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] not-italic pl-[16px] relative text-[18px] text-center w-full">
          <p className="relative shrink-0 text-[#404040]">Root Causes for hair fall</p>
          <p className="relative shrink-0 text-[#8c8c8c]">Based on your answers</p>
        </div>
      </div>
    </div>
  );
}

function Nutrition() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="nutrition">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="nutrition">
          <mask height="24" id="mask0_2_704" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_704)">
            <path d={svgPaths.p3efa45d0} fill="var(--fill-0, #404040)" id="nutrition_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f3e1de] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[8px] relative w-full">
          <Nutrition />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#404040] text-[16px]">Nutrition</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex items-start px-[12px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[12px] whitespace-pre-wrap">Triggers scalp inflammation and weakens hair roots, leading to hair fall.</p>
      </div>
    </div>
  );
}

function RootCauses() {
  return (
    <div className="bg-white h-[110px] min-w-[200px] relative rounded-[12px] shrink-0" data-name="Root Causes">
      <div className="content-stretch flex flex-col gap-[8px] h-full items-start min-w-[inherit] overflow-clip relative rounded-[inherit]">
        <Frame20 />
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function SentimentWorried() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="sentiment_worried">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="sentiment_worried">
          <mask height="24" id="mask0_2_726" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_726)">
            <path d={svgPaths.p33fa9600} fill="var(--fill-0, #404040)" id="sentiment_worried_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f3e1de] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[8px] relative w-full">
          <SentimentWorried />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#404040] text-[16px]">Stress</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex items-start px-[12px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[12px] whitespace-pre-wrap">Causes inflammation in your scalp, weakens hair roots and causes hair fall</p>
      </div>
    </div>
  );
}

function RootCauses1() {
  return (
    <div className="bg-white h-[110px] min-w-[200px] relative rounded-[12px] shrink-0" data-name="Root Causes">
      <div className="content-stretch flex flex-col gap-[8px] h-full items-start min-w-[inherit] overflow-clip relative rounded-[inherit]">
        <Frame22 />
        <Frame23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] relative w-full">
        <RootCauses />
        <RootCauses1 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[411px]">
      <Frame19 />
      <Frame18 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] not-italic px-[16px] relative text-[18px] w-full">
          <p className="relative shrink-0 text-[#404040] text-center">What your hair needs to recover</p>
          <p className="min-w-full relative shrink-0 text-[#8c8c8c] w-[min-content] whitespace-pre-wrap">Restoring your hair from inside out</p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[74px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#ececec] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[227.56%] left-[-21.73%] max-w-none top-[-47.33%] w-[358.88%]" src={imgFrame46} />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] w-full">Restore Internal Balance</p>
      <p className="leading-[20px] relative shrink-0 text-[#8c8c8c] text-[14px] w-full">Addresses internal imbalances that impact hair growth cycles.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Frame38 />
          <Frame40 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[74px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#ececec] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[207.29%] left-[-105.22%] max-w-none top-[-40.08%] w-[308.43%]" src={imgFrame46} />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] w-full">Strengthen Hair Follicles</p>
      <p className="leading-[20px] relative shrink-0 text-[#8c8c8c] text-[14px] w-full">Improves follicle strength to support consistent, healthy growth.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Frame41 />
          <Frame42 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#ececec] overflow-clip relative rounded-[12px] shrink-0 size-[74px]">
      <div className="absolute h-[79px] left-0 top-[-2px] w-[74px]" data-name="image 566">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[207.19%] left-[-214.93%] max-w-none top-[-39.41%] w-[327.51%]" src={imgFrame46} />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] w-full">Improve Scalp Health</p>
      <p className="leading-[20px] relative shrink-0 text-[#8c8c8c] text-[14px] w-full">Creates a balanced scalp environment for stronger regrowth.</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Frame43 />
          <Frame44 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full">
        <Frame24 />
        <Frame25 />
        <Frame26 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center py-[24px] relative shrink-0 w-[411px]">
      <Frame9 />
      <Frame39 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] not-italic pl-[16px] relative text-[18px] text-center w-full">
          <p className="relative shrink-0 text-[#404040]">Routine created just for you</p>
          <p className="relative shrink-0 text-[#8c8c8c]">Just 2 steps. Less than 10 minutes a day.</p>
        </div>
      </div>
    </div>
  );
}

function LightMode() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="light_mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="light_mode">
          <mask height="24" id="mask0_2_765" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_765)">
            <path d={svgPaths.pc30f900} fill="var(--fill-0, #333333)" id="light_mode_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f9f0ef] content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <LightMode />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#333] text-[16px] text-center">Morning</p>
    </div>
  );
}

function MoonStars() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="moon_stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="moon_stars">
          <mask height="24" id="mask0_2_720" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_720)">
            <path d={svgPaths.p6f88b00} fill="var(--fill-0, #333333)" id="moon_stars_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <MoonStars />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#333] text-[16px] text-center">Night</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] relative w-full">
        <Frame13 />
        <Frame16 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Step 1</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px]">Why we picked it?</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame74 />
      <div className="h-[188.209px] relative shrink-0 w-[188px]" data-name="image-Photoroom (5) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom51} />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px]">Strengthen Follicles</p>
    </div>
  );
}

function Frame29() {
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
          <mask height="20" id="mask0_2_712" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_712)">
            <path d={svgPaths.p115c8200} fill="var(--fill-0, #C4695B)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Check />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c4695b] text-[14px]">Added</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame29 />
      <div className="flex flex-row items-center self-stretch">
        <Frame105 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] w-full whitespace-pre-wrap">Defence shampoo</p>
      <Frame109 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function ProductItem() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center p-[16px] relative rounded-[12px] self-stretch shrink-0 w-[220px]" data-name="Product Item">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Step 2</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame30 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px]">Why we picked it?</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame75 />
      <div className="aspect-[170/170] relative shrink-0 w-full" data-name="image 40">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.55%] left-[-14.06%] max-w-none top-[-27.81%] w-[127.67%]" src={imgImage40} />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px]">Strengthen Follicles</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center min-h-px min-w-px not-italic relative">
      <p className="leading-[22px] relative shrink-0 text-[#ca8f4f] text-[16px]">₹340</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through relative shrink-0 text-[#8c8c8c] text-[14px]">₹540</p>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="add">
          <mask height="20" id="mask0_2_708" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_708)">
            <path d={svgPaths.pf9db040} fill="var(--fill-0, white)" id="add_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-[#c4695b] content-stretch flex gap-[2px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Add />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Add</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame33 />
      <Frame106 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] w-full whitespace-pre-wrap">Minoxidil 2%, Alcohol-free</p>
      <Frame112 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function ProductItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative rounded-[12px] shrink-0 w-[220px]" data-name="Product Item">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame110 />
      <Frame111 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Step 1</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame34 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px]">Why we picked it?</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame77 />
      <div className="aspect-[170/170] relative shrink-0 w-full" data-name="image 40">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.55%] left-[-14.06%] max-w-none top-[-27.81%] w-[127.67%]" src={imgImage40} />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px]">Strengthen Follicles</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center min-h-px min-w-px not-italic relative">
      <p className="leading-[22px] relative shrink-0 text-[#ca8f4f] text-[16px]">FREE</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through relative shrink-0 text-[#8c8c8c] text-[14px]">₹540</p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <mask height="20" id="mask0_2_712" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_712)">
            <path d={svgPaths.p115c8200} fill="var(--fill-0, #C4695B)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Check1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c4695b] text-[14px]">Added</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame37 />
      <div className="flex flex-row items-center self-stretch">
        <Frame116 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] w-full whitespace-pre-wrap">Minoxidil 2%, Alcohol-free</p>
      <Frame115 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function ProductItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative rounded-[12px] shrink-0 w-[220px]" data-name="Product Item">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame113 />
      <Frame114 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pl-[16px] relative shrink-0">
      <ProductItem />
      <ProductItem1 />
      <ProductItem2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[411px]">
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] not-italic pl-[16px] relative text-[18px] text-center w-full">
          <p className="relative shrink-0 text-[#404040]">Support you can rely on</p>
          <p className="relative shrink-0 text-[#8c8c8c]">designed to help you in journey.</p>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start justify-center min-h-px min-w-px not-italic relative">
      <p className="leading-[normal] relative shrink-0 text-[#1a1a1a] text-[18px] text-center">Hair Coach Support</p>
      <p className="leading-[20px] min-w-full relative shrink-0 text-[#404040] text-[14px] w-[min-content] whitespace-pre-wrap">Monitors your progress and guides your treatment</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#c4695b] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[5px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f9f0ef] text-[14px]">Free</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame67 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[22px] line-through not-italic relative shrink-0 text-[#404040] text-[16px]">₹300</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="absolute content-stretch flex gap-[40px] h-[219px] items-end left-0 overflow-clip px-[16px] py-[20px] top-[144px] w-[372px]" style={{ backgroundImage: "linear-gradient(178.971deg, rgba(243, 225, 222, 0) 1.4802%, rgb(243, 225, 222) 60.573%)" }}>
      <Frame78 />
      <Frame46 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="absolute bg-[#e2b4ad] content-stretch flex flex-col items-start justify-center left-[15.76px] overflow-clip px-[10.49px] py-[6.993px] rounded-br-[10.49px] rounded-tl-[10.49px] rounded-tr-[10.49px] top-[200.34px] w-[149.484px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.483px] not-italic relative shrink-0 text-[#1a1a1a] text-[12.238px] w-full whitespace-pre-wrap">Hello, how can I help?</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute bg-[#ead2b9] content-stretch flex items-center left-[151px] overflow-clip px-[10.5px] py-[7px] rounded-bl-[10.5px] rounded-tl-[10.5px] rounded-tr-[10.5px] top-[146px] w-[210px]">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1a1a1a] text-[12.25px] whitespace-pre-wrap">Hi, I have questions about my hair treatment</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#f9f0ef] flex-[1_0_0] h-[363px] min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[16px] relative size-full">
          <div className="absolute left-[-20px] size-[407px] top-[-17px]" data-name="Gemini_Generated_Image_izle3hizle3hizle-Photoroom 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageIzle3Hizle3HizlePhotoroom1} />
          </div>
          <Frame73 />
          <Frame94 />
          <Frame69 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7c3bd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start justify-center min-h-px min-w-px not-italic relative">
      <p className="leading-[normal] relative shrink-0 text-[#1a1a1a] text-[18px] text-center">Flexible Diet Plan</p>
      <p className="leading-[20px] min-w-full relative shrink-0 text-[#404040] text-[14px] w-[min-content] whitespace-pre-wrap">Nutritious homely recipes to support your hair health</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#c4695b] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[5px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f9f0ef] text-[14px]">Free</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame98 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[22px] line-through not-italic relative shrink-0 text-[#404040] text-[16px]">₹200</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="absolute content-stretch flex gap-[40px] h-[219px] items-end left-0 overflow-clip px-[16px] py-[20px] top-[144px] w-[411px]" style={{ backgroundImage: "linear-gradient(179.069deg, rgba(243, 225, 222, 0) 1.4802%, rgb(243, 225, 222) 60.573%)" }}>
      <Frame97 />
      <Frame47 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#f9f0ef] flex-[1_0_0] h-[363px] min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[16px] relative size-full">
          <div className="absolute flex h-[428px] items-center justify-center left-[72px] top-[-26px] w-[240.75px]">
            <div className="flex-none rotate-180">
              <div className="h-[428px] relative w-[240.75px]" data-name="image-Photoroom 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom1} />
              </div>
            </div>
          </div>
          <Frame96 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7c3bd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[760px]">
      <Frame68 />
      <Frame95 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame118 />
    </div>
  );
}

function Frame62() {
  return <div className="bg-[#dca59d] rounded-[100px] shrink-0 size-[8px]" />;
}

function Frame63() {
  return <div className="bg-[#edd2ce] rounded-[100px] shrink-0 size-[8px]" />;
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="bg-[#f9f0ef] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[100px] shrink-0">
      <Frame65 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] relative w-full">
          <Frame117 />
          <Frame119 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-full">
      <Frame72 />
      <Frame71 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[18px] text-center">
      <p className="relative shrink-0 text-[#404040]">What your recovery journey looks like</p>
      <p className="relative shrink-0 text-[#8c8c8c]">Based on realistic recovery patterns</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[77px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2b4ad] border-solid inset-0 pointer-events-none rounded-[77px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#404040] text-[16px] text-center">Month 1</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[77px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2b4ad] border-solid inset-0 pointer-events-none rounded-[77px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#404040] text-[16px] text-center">Month 2</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[77px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2b4ad] border-solid inset-0 pointer-events-none rounded-[77px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#404040] text-[16px] text-center">Month 3</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[77px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2b4ad] border-solid inset-0 pointer-events-none rounded-[77px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#404040] text-[16px] text-center">Month 4</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[77px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2b4ad] border-solid inset-0 pointer-events-none rounded-[77px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#404040] text-[16px] text-center">Month 5</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[77px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2b4ad] border-solid inset-0 pointer-events-none rounded-[77px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#404040] text-[16px] text-center">Month 6</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[200px] items-start relative shrink-0">
      <div className="absolute h-0 left-[86px] top-[15px] w-[1435px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1435 1">
            <line id="Line 5" stroke="var(--stroke-0, #E2B4AD)" x2="1435" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame101 />
      <Frame102 />
      <Frame103 />
      <Frame120 />
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="bg-[#dedede] overflow-clip relative rounded-[12px] shrink-0 size-[60px]">
      <div className="absolute left-[-13px] size-[85px] top-[-10px]" data-name="image 569">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage569} />
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] text-center">Visible dandruff reduction</p>
      <div className="leading-[20px] min-w-full relative shrink-0 text-[#8c8c8c] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Dandruff clears up so your scalp is cleaner and less irritated.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function ProgressCard() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[260px]" data-name="Progress card">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Frame124 />
        <Frame125 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-[#f9f0ef] overflow-clip relative rounded-[12px] shrink-0 size-[60px]">
      <div className="absolute left-[-13px] size-[85px] top-[-10px]" data-name="image-Photoroom (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom11} />
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] text-center">Visible dandruff reduction</p>
      <p className="leading-[20px] min-w-full relative shrink-0 text-[#8c8c8c] text-[14px] w-[min-content] whitespace-pre-wrap">Your scalp becomes balanced and ready to support stronger hair growth.</p>
    </div>
  );
}

function ProgressCard1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[260px]" data-name="Progress card">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Frame126 />
        <Frame127 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-[#f9f0ef] overflow-clip relative rounded-[12px] shrink-0 size-[60px]">
      <div className="absolute left-[-13px] size-[86px] top-[-10px]" data-name="image-Photoroom (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom21} />
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] text-center">Visible dandruff reduction</p>
      <p className="leading-[20px] min-w-full relative shrink-0 text-[#8c8c8c] text-[14px] w-[min-content] whitespace-pre-wrap">New strong hair pushes weak hair out. Temporary shedding may occur for about 4 weeks.</p>
    </div>
  );
}

function ProgressCard2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[260px]" data-name="Progress card">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Frame128 />
        <Frame129 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame130() {
  return (
    <div className="bg-[#f9f0ef] overflow-clip relative rounded-[12px] shrink-0 size-[60px]">
      <div className="absolute left-[-13px] size-[88px] top-[-10px]" data-name="image-Photoroom (3) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom31} />
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] text-center">Visible dandruff reduction</p>
      <p className="leading-[20px] min-w-full relative shrink-0 text-[#8c8c8c] text-[14px] w-[min-content] whitespace-pre-wrap">Hair fall reduces as stronger roots hold hair firmly during combing, oiling, and washing.</p>
    </div>
  );
}

function ProgressCard3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[260px]" data-name="Progress card">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Frame130 />
        <Frame131 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[#f9f0ef] overflow-clip relative rounded-[12px] shrink-0 size-[60px]">
      <div className="absolute left-[-25px] size-[109px] top-[-17px]" data-name="image-Photoroom (4) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom41} />
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] text-center">Visible dandruff reduction</p>
      <p className="leading-[20px] min-w-full relative shrink-0 text-[#8c8c8c] text-[14px] w-[min-content] whitespace-pre-wrap">{`Your hair grows at a healthy speed and starts feeling softer & smoother.`}</p>
    </div>
  );
}

function ProgressCard4() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[260px]" data-name="Progress card">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Frame132 />
        <Frame133 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#f9f0ef] overflow-clip relative rounded-[12px] shrink-0 size-[60px]">
      <div className="absolute left-[-23px] size-[107px] top-[-16px]" data-name="image-Photoroom (4) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom41} />
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[22px] relative shrink-0 text-[#404040] text-[16px] text-center">Visible dandruff reduction</p>
      <div className="leading-[20px] min-w-full relative shrink-0 text-[#8c8c8c] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Your scalp starts feeling fuller as hairfall is less & hair growth is fast`}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function ProgressCard5() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[260px]" data-name="Progress card">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <Frame134 />
        <Frame135 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[26px] items-start relative shrink-0">
      <ProgressCard />
      <ProgressCard1 />
      <ProgressCard2 />
      <ProgressCard3 />
      <ProgressCard4 />
      <ProgressCard5 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame100 />
      <Frame123 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pl-[16px] relative shrink-0 w-[1721px]">
      <Frame50 />
      <Frame104 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0">
      <Frame49 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[24px] relative shrink-0 w-[411px]">
      <Frame99 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] not-italic pl-[16px] relative text-[18px] text-center w-full">
          <p className="relative shrink-0 text-[#404040]">Recommended products just for you</p>
          <p className="relative shrink-0 text-[#8c8c8c]">9 picked from 846 items</p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Most loved</p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star">
          <mask height="20" id="mask0_2_696" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_696)">
            <path d={svgPaths.p16b202c0} fill="var(--fill-0, #404040)" id="star_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Star />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px]">4.5</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">(2.2k)</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame54 />
      <Frame139 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame138 />
      <div className="h-[188.209px] relative shrink-0 w-[188px]" data-name="image-Photoroom (6) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom61} />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px]">Strengthen Follicles</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center min-h-px min-w-px not-italic relative">
      <p className="leading-[22px] relative shrink-0 text-[#ca8f4f] text-[16px]">₹340</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through relative shrink-0 text-[#8c8c8c] text-[14px]">₹540</p>
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="add">
          <mask height="20" id="mask0_2_708" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_708)">
            <path d={svgPaths.pf9db040} fill="var(--fill-0, white)" id="add_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame142() {
  return (
    <div className="bg-[#c4695b] content-stretch flex gap-[2px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Add1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Add</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame57 />
      <Frame142 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] w-full whitespace-pre-wrap">Hair Ras Ayurvedic Hair Herbs</p>
      <Frame141 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function ProductItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative rounded-[12px] shrink-0 w-[220px]" data-name="Product Item">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame137 />
      <Frame140 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Strong fit</p>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star">
          <mask height="20" id="mask0_2_696" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_696)">
            <path d={svgPaths.p16b202c0} fill="var(--fill-0, #404040)" id="star_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Star1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px]">4.5</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">(2.2k)</p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame58 />
      <Frame145 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame144 />
      <div className="relative shrink-0 size-[188px]" data-name="image-Photoroom (4) 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhotoroom42} />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px]">Strengthen Follicles</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center min-h-px min-w-px not-italic relative">
      <p className="leading-[22px] relative shrink-0 text-[#ca8f4f] text-[16px]">₹340</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through relative shrink-0 text-[#8c8c8c] text-[14px]">₹540</p>
    </div>
  );
}

function Add2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="add">
          <mask height="20" id="mask0_2_708" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_708)">
            <path d={svgPaths.pf9db040} fill="var(--fill-0, white)" id="add_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-[#c4695b] content-stretch flex gap-[2px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Add2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Add</p>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame61 />
      <Frame148 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] w-full whitespace-pre-wrap">Hair Actives Serum</p>
      <Frame147 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full">
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function ProductItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[364px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[220px]" data-name="Product Item">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame143 />
      <Frame146 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px]">Step 1</p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame64 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px]">Why we picked it?</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame150 />
      <div className="aspect-[170/170] relative shrink-0 w-full" data-name="image 40">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.55%] left-[-14.06%] max-w-none top-[-27.81%] w-[127.67%]" src={imgImage40} />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px]">Strengthen Follicles</p>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center min-h-px min-w-px not-italic relative">
      <p className="leading-[22px] relative shrink-0 text-[#ca8f4f] text-[16px]">FREE</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through relative shrink-0 text-[#8c8c8c] text-[14px]">₹540</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <mask height="20" id="mask0_2_712" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_712)">
            <path d={svgPaths.p115c8200} fill="var(--fill-0, #C4695B)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[5px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Check2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c4695b] text-[14px]">Added</p>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame154 />
      <div className="flex flex-row items-center self-stretch">
        <Frame155 />
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] w-full whitespace-pre-wrap">Minoxidil 2%, Alcohol-free</p>
      <Frame153 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame66 />
      <Frame152 />
    </div>
  );
}

function ProductItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative rounded-[12px] shrink-0 w-[220px]" data-name="Product Item">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame149 />
      <Frame151 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pl-[16px] relative shrink-0">
      <ProductItem3 />
      <ProductItem4 />
      <ProductItem5 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame53 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[411px]">
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[18px] w-full">
      <p className="relative shrink-0 text-[#404040] text-center">We can help you get there</p>
      <p className="min-w-full relative shrink-0 text-[#8c8c8c] w-[min-content] whitespace-pre-wrap">With personalized treatment, our users see improvements within 8–12 weeks.</p>
    </div>
  );
}

function Frame163() {
  return <div className="absolute bg-gradient-to-t from-[35.802%] from-[rgba(0,0,0,0.5)] h-[59px] left-0 to-[rgba(0,0,0,0)] top-[70px] w-[105px]" />;
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <div className="h-[130px] relative shrink-0 w-[105px]" data-name="image 570">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[376.89%] left-[-17.58%] max-w-none top-[-46.22%] w-[360.44%]" src={imgImage570} />
        </div>
      </div>
      <Frame163 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[52px] not-italic text-[#edd2ce] text-[14px] text-center top-[100px]">Month 1</p>
    </div>
  );
}

function Frame165() {
  return <div className="absolute bg-gradient-to-t from-[35.802%] from-[rgba(0,0,0,0.5)] h-[59px] left-0 to-[rgba(0,0,0,0)] top-[70px] w-[105px]" />;
}

function Frame164() {
  return (
    <div className="flex-[1_0_0] h-[129px] min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <div className="absolute h-[129px] left-0 top-0 w-[104px]" data-name="image 571">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[371.93%] left-[-128.26%] max-w-none top-[-43.86%] w-[356.52%]" src={imgImage570} />
        </div>
      </div>
      <Frame165 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[52px] not-italic text-[#edd2ce] text-[14px] text-center top-[110px] whitespace-nowrap">
        <p className="leading-[20px]">Month 3</p>
      </div>
    </div>
  );
}

function Frame167() {
  return <div className="absolute bg-gradient-to-t from-[35.802%] from-[rgba(0,0,0,0.5)] h-[59px] left-0 to-[rgba(0,0,0,0)] top-[70px] w-[105px]" />;
}

function Frame166() {
  return (
    <div className="flex-[1_0_0] h-[129px] min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <div className="absolute h-[134px] left-0 top-0 w-[103px]" data-name="image 572">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[365.52%] left-[-248.6%] max-w-none top-[-43.1%] w-[366.48%]" src={imgImage570} />
        </div>
      </div>
      <Frame167 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[52px] not-italic text-[#edd2ce] text-[14px] text-center top-[110px] whitespace-nowrap">
        <p className="leading-[20px]">Month 6</p>
      </div>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex gap-[16px] h-[129px] items-start relative shrink-0 w-full">
      <Frame162 />
      <Frame164 />
      <Frame166 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[20px] relative shrink-0 text-[14px] w-full">
      <p className="relative shrink-0 w-full">Riddhi, 25</p>
      <p className="relative shrink-0 w-full">Mumbai</p>
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[16px] items-start not-italic relative shrink-0 text-[#404040] w-full whitespace-pre-wrap">
      <p className="leading-[0] relative shrink-0 text-[0px] text-[16px] w-full">
        <span className="leading-[22px]">{`“Kaafi time se hair thinning ho raha tha aur kuch kaam nahi kar raha tha. Traya start karne ke baad `}</span>
        <span className="leading-[22px] text-[#c4695b]">hair fall control</span>
        <span className="leading-[22px]">{` hua aur new `}</span>
        <span className="leading-[22px] text-[#c4695b]">growth bhi dikhne lagi”</span>
      </p>
      <Frame169 />
    </div>
  );
}

function Beenhere() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="beenhere">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="beenhere">
          <mask height="16" id="mask0_2_716" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_2_716)">
            <path d={svgPaths.pf524600} fill="var(--fill-0, #404040)" id="beenhere_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame172() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex gap-[4px] items-center pl-[8px] pr-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dca59d] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Beenhere />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px] text-center">Traya customer</p>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame172 />
    </div>
  );
}

function CircleCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="circle_circle">
          <mask height="16" id="mask0_2_734" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_2_734)">
            <path d={svgPaths.p3a034900} fill="var(--fill-0, #404040)" id="circle_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame174() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex gap-[4px] items-center pl-[8px] pr-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dca59d] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <CircleCircle />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px] text-center">Similar hair concerns</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame174 />
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame171 />
      <Frame173 />
    </div>
  );
}

function Frame160() {
  return (
    <div className="bg-[#f9f0ef] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[370px]">
      <Frame161 />
      <Frame168 />
      <Frame170 />
    </div>
  );
}

function Frame178() {
  return <div className="absolute bg-gradient-to-t from-[35.802%] from-[rgba(0,0,0,0.5)] h-[59px] left-0 to-[rgba(0,0,0,0)] top-[70px] w-[105px]" />;
}

function Frame177() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <div className="aspect-[355/437] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="image 561">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[384.22%] left-[-19.06%] max-w-none top-[-47.78%] w-[356.96%]" src={imgImage561} />
        </div>
      </div>
      <Frame178 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[52px] not-italic text-[#edd2ce] text-[14px] text-center top-[100px]">Month 1</p>
    </div>
  );
}

function Frame180() {
  return <div className="absolute bg-gradient-to-t from-[35.802%] from-[rgba(0,0,0,0.5)] h-[59px] left-0 to-[rgba(0,0,0,0)] top-[70px] w-[105px]" />;
}

function Frame179() {
  return (
    <div className="flex-[1_0_0] h-[129px] min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <div className="absolute h-[129px] left-0 rounded-[12px] top-0 w-[105px]" data-name="image 562">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[384.22%] left-[-242.31%] max-w-none top-[-47.06%] w-[356.96%]" src={imgImage561} />
        </div>
      </div>
      <Frame180 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[52px] not-italic text-[#edd2ce] text-[14px] text-center top-[110px] whitespace-nowrap">
        <p className="leading-[20px]">Month 3</p>
      </div>
    </div>
  );
}

function Frame182() {
  return <div className="absolute bg-gradient-to-t from-[35.802%] from-[rgba(0,0,0,0.5)] h-[59px] left-0 to-[rgba(0,0,0,0)] top-[70px] w-[105px]" />;
}

function Frame181() {
  return (
    <div className="flex-[1_0_0] h-[129px] min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <div className="absolute h-[129px] left-0 rounded-[12px] top-0 w-[105px]" data-name="image 562">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[384.22%] left-[-242.31%] max-w-none top-[-47.06%] w-[356.96%]" src={imgImage561} />
        </div>
      </div>
      <Frame182 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[52px] not-italic text-[#edd2ce] text-[14px] text-center top-[110px] whitespace-nowrap">
        <p className="leading-[20px]">Month 6</p>
      </div>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex gap-[16px] h-[129px] items-start relative shrink-0 w-full">
      <Frame177 />
      <Frame179 />
      <Frame181 />
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[20px] relative shrink-0 text-[14px] w-full">
      <p className="relative shrink-0 w-full">Riddhi, 25</p>
      <p className="relative shrink-0 w-full">Mumbai</p>
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[16px] items-start not-italic relative shrink-0 text-[#404040] w-full whitespace-pre-wrap">
      <p className="leading-[0] relative shrink-0 text-[0px] text-[16px] w-full">
        <span className="leading-[22px]">{`“Kaafi time se hair thinning ho raha tha aur kuch kaam nahi kar raha tha. Traya start karne ke baad `}</span>
        <span className="leading-[22px] text-[#c4695b]">hair fall control</span>
        <span className="leading-[22px]">{` hua aur new `}</span>
        <span className="leading-[22px] text-[#c4695b]">growth bhi dikhne lagi”</span>
      </p>
      <Frame184 />
    </div>
  );
}

function Beenhere1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="beenhere">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="beenhere">
          <mask height="16" id="mask0_2_716" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_2_716)">
            <path d={svgPaths.pf524600} fill="var(--fill-0, #404040)" id="beenhere_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame187() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex gap-[4px] items-center pl-[8px] pr-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dca59d] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Beenhere1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px] text-center">Traya customer</p>
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame187 />
    </div>
  );
}

function CircleCircle1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="circle_circle">
          <mask height="16" id="mask0_2_734" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_2_734)">
            <path d={svgPaths.p3a034900} fill="var(--fill-0, #404040)" id="circle_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame189() {
  return (
    <div className="bg-[#edd2ce] content-stretch flex gap-[4px] items-center pl-[8px] pr-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dca59d] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <CircleCircle1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404040] text-[12px] text-center">Similar hair concerns</p>
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame189 />
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame186 />
      <Frame188 />
    </div>
  );
}

function Frame175() {
  return (
    <div className="bg-[#f9f0ef] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[370px]">
      <Frame176 />
      <Frame183 />
      <Frame185 />
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame160 />
      <Frame175 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[16px] relative w-full">
          <Frame158 />
          <Frame159 />
        </div>
      </div>
    </div>
  );
}

function Frame192() {
  return <div className="bg-[#dca59d] rounded-[100px] shrink-0 size-[8px]" />;
}

function Frame193() {
  return <div className="bg-[#edd2ce] rounded-[100px] shrink-0 size-[8px]" />;
}

function Frame194() {
  return <div className="bg-[#edd2ce] rounded-[100px] shrink-0 size-[8px]" />;
}

function Frame191() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame192 />
      <Frame193 />
      <Frame194 />
    </div>
  );
}

function Frame190() {
  return (
    <div className="bg-[#f9f0ef] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[100px] shrink-0">
      <Frame191 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center py-[24px] relative shrink-0 w-[411px]">
      <Frame157 />
      <Frame190 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[18px] text-center">
      <p className="relative shrink-0 text-[#404040]">Questions?</p>
      <p className="relative shrink-0 text-[#b3b3b3]">We got you!</p>
    </div>
  );
}

function SwitchRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="switch_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="switch_right">
          <mask height="20" id="mask0_2_692" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_692)">
            <path d={svgPaths.p2ae2ec00} fill="var(--fill-0, #404040)" id="switch_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame199() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[50px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <SwitchRight />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px] text-center">EN</p>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame198 />
      <Frame199 />
    </div>
  );
}

function KeyboardArrowUp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="keyboard_arrow_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="keyboard_arrow_up">
          <mask height="20" id="mask0_2_700" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_700)">
            <path d={svgPaths.p1bb75c00} fill="var(--fill-0, #404040)" id="keyboard_arrow_up_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] whitespace-pre-wrap">Why are there so many products in the Traya kit?</p>
      <KeyboardArrowUp />
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
      <Frame202 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] w-full whitespace-pre-wrap">Hair loss has multiple causes. Your kit includes supplements and topical treatments designed to work together for complete recovery.</p>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="keyboard_arrow_down">
          <mask height="20" id="mask0_2_688" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_688)">
            <path d={svgPaths.p37d35b00} fill="var(--fill-0, #404040)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] whitespace-pre-wrap">What will happen once I buy the plan? When will a hair coach be provided?</p>
      <KeyboardArrowDown />
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
      <Frame204 />
    </div>
  );
}

function KeyboardArrowDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="keyboard_arrow_down">
          <mask height="20" id="mask0_2_688" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_688)">
            <path d={svgPaths.p37d35b00} fill="var(--fill-0, #404040)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] whitespace-pre-wrap">Why is Traya solution so expensive?</p>
      <KeyboardArrowDown1 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
      <Frame206 />
    </div>
  );
}

function KeyboardArrowDown2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="keyboard_arrow_down">
          <mask height="20" id="mask0_2_688" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_2_688)">
            <path d={svgPaths.p37d35b00} fill="var(--fill-0, #404040)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] whitespace-pre-wrap">Is it safe to consume along with other supplements?</p>
      <KeyboardArrowDown2 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame208 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame201 />
      <Frame203 />
      <Frame205 />
      <Frame207 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[16px] relative w-full">
          <Frame197 />
          <Frame200 />
        </div>
      </div>
    </div>
  );
}

function Frame195() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[48px] pt-[24px] relative shrink-0 w-[411px]">
      <Frame196 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="bg-[#e2b4ad] content-stretch flex items-center justify-center overflow-clip py-[4px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px]">30 days money back guarantee</p>
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="leading-[normal] relative shrink-0 text-[#404040] text-[18px]">₹1965</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through relative shrink-0 text-[#8c8c8c] text-[14px]">₹2792</p>
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative">
      <Frame214 />
      <p className="leading-[20px] min-w-full relative shrink-0 text-[#8c8c8c] text-[14px] w-[min-content] whitespace-pre-wrap">Inclusive all taxes</p>
    </div>
  );
}

function Frame215() {
  return (
    <div className="bg-[#c4695b] content-stretch flex items-center justify-center px-[24px] py-[16px] relative rounded-[12px] shrink-0 w-[200px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#f9f0ef] text-[18px]">Buy Now</p>
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame213 />
      <Frame215 />
    </div>
  );
}

function Frame211() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
          <Frame212 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex flex-col items-center relative shadow-[0px_-5px_6px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <Frame210 />
      <Frame211 />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="iPhone 16 - 1">
      <Frame1 />
      <Frame70 />
      <Frame8 />
      <Frame11 />
      <Frame10 />
      <Frame45 />
      <Frame48 />
      <Frame136 />
      <Frame156 />
      <Frame195 />
      <Frame209 />
    </div>
  );
}
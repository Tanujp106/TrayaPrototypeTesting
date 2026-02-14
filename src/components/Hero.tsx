import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-0k8jgopwj0";
import exampleImage from "figma:asset/2a9515b0e83c1fdf6e787d373b2092f94068aa03.png";

export function Hero() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="px-3 pt-3 pb-1 w-full max-w-[411px] mx-auto font-['Inter',sans-serif]">
      <div className="bg-[#f9f0ef] rounded-xl p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-[12px] items-start justify-center w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-medium text-[#1a1a1a] text-[18px]">
              Hi Tanuj,
            </p>
            <div
              onClick={() => setIsSheetOpen(true)}
              className="bg-[#edd2ce] flex gap-[4px] items-center justify-center px-[10px] py-[4px] rounded-[40px] overflow-hidden cursor-pointer"
            >
              <motion.p
                className="font-medium text-[14px] bg-clip-text text-transparent bg-linear-to-r from-[#404040] via-[#C4695B] to-[#404040] bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["200% 0", "-200% 0"],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "ease-in-out",
                }}
              >
                Visible results in 12 weeks
              </motion.p>
              <div className="relative shrink-0 size-[20px]">
                <svg
                  className="block size-full"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <mask
                    id="mask0_info"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                  >
                    <rect
                      fill="#D9D9D9"
                      width="20"
                      height="20"
                    />
                  </mask>
                  <g mask="url(#mask0_info)">
                    <path
                      d={svgPaths.p3c784300}
                      fill="#404040"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <p className="font-medium text-[#404040] text-[16px] leading-[22px] w-full">
            You are showing early signs of{" "}
            <span className="text-[#c4695b]">
              hair thinning
            </span>{" "}
            linked to stress and hormonal imbalance.
          </p>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex flex-col items-center gap-2">
            <svg
              className="size-7"
              fill="none"
              viewBox="0 0 28 28"
            >
              <path d={svgPaths.p1562ed00} fill="#404040" />
            </svg>
            <div className="text-center">
              <p className="text-[#404040] text-sm font-medium">
                Oily
              </p>
              <p className="text-[#8c8c8c] text-[12px]">
                Hair type
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              className="size-7"
              fill="none"
              viewBox="0 0 28 28"
            >
              <path d={svgPaths.p879cf00} fill="#404040" />
              <path d={svgPaths.p1c190e00} fill="#404040" />
              <path d={svgPaths.p286b5380} fill="#404040" />
              <path d={svgPaths.p6dc33f0} fill="#404040" />
              <path d={svgPaths.pf396c80} fill="#404040" />
              <path d={svgPaths.p8f61300} fill="#404040" />
            </svg>
            <div className="text-center">
              <p className="text-[#404040] text-sm font-medium">
                Digestion
              </p>
              <p className="text-[#8c8c8c] text-[12px]">
                Additional Concern
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              className="size-7"
              fill="none"
              viewBox="0 0 28 28"
            >
              <path d={svgPaths.p14194cf0} fill="#404040" />
              <path d={svgPaths.p946ee00} fill="#404040" />
              <path d={svgPaths.p376c3c40} fill="#404040" />
              <path d={svgPaths.p356b2c40} fill="#404040" />
              <path d={svgPaths.p270ff700} fill="#404040" />
              <path d={svgPaths.p26fe4280} fill="#404040" />
              <path d={svgPaths.p2eec7500} fill="#404040" />
            </svg>
            <div className="text-center">
              <p className="text-[#404040] text-sm font-medium">
                Disturbed
              </p>
              <p className="text-[#8c8c8c] text-[12px]">
                Sleep
              </p>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[#ececec] flex flex-col gap-3">
          <p className="text-[#404040] text-sm font-medium">
            High chances of hair recovery
          </p>
          <div className="relative">
            <div className="h-2 w-full bg-gradient-to-r from-[#dfbc95] to-[#f0e0cf] rounded-full" />
            {/* Markers */}
            <div className="absolute top-0 left-[83px] w-px h-2 bg-[#D5A572]" />
            <div className="absolute top-0 left-[191px] w-px h-2 bg-[#D5A572]" />
            <div className="absolute top-0 left-[281px] w-px h-2 bg-[#D5A572]" />
            {/* Active Indicator */}
            <div className="absolute -top-1 left-[34px] size-4 rounded-full border-4 border-[#D5A572] bg-[#EAD2B9]" />
          </div>
          <div className="flex justify-between px-1">
            <p className="text-[#1a1a1a] text-xs font-medium w-20">
              Stage 1
            </p>
            <p className="text-[#8c8c8c] text-xs font-medium w-20 text-center">
              Stage 2
            </p>
            <p className="text-[#8c8c8c] text-xs font-medium w-20 text-center">
              Stage 3
            </p>
            <p className="text-[#8c8c8c] text-xs font-medium w-20 text-right">
              Stage 4
            </p>
          </div>
        </div>

        <div className="bg-[#f4e9dc] rounded-xl p-3">
          <p className="text-[#404040] text-sm font-medium leading-5">
            You are in Stage 1. It is an early and highly
            treatable stage when addressed consistently.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSheetOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[32px] overflow-hidden shadow-2xl pb-8"
              style={{ maxHeight: '90vh' }}
            >
              {/* Handle */}
              <div className="w-full flex justify-center pt-3 pb-1">
                <div className="w-[48px] h-[5px] bg-[#E5E7EB] rounded-full" />
              </div>

              {/* Content */}
              <div className="px-6 pt-2 pb-8 flex flex-col items-center text-center">
                {/* Image */}
                <div className="mb-8 w-full max-w-[320px] flex justify-center">
                  <img
                    src={exampleImage}
                    alt="Results analysis"
                    className="w-full object-contain max-h-[250px]"
                  />
                </div>

                {/* Headline */}
                <h3 className="text-[28px] leading-[34px] font-bold text-[#1F1F1F] tracking-tight mb-3">
                  Visible results in 12 weeks
                </h3>

                {/* Subtext */}
                <p className="text-[17px] leading-[24px] text-[#525252] mb-8 max-w-[320px]">
                  Based on the results of our customers, we believe that you will see visible results in 12 weeks.
                </p>

                {/* Buttons */}
                <div className="w-full flex flex-col gap-3">
                  <button
                    onClick={() => setIsSheetOpen(false)}
                    className="w-full h-[56px] rounded-full bg-[#C4695B] text-white text-[17px] font-semibold shadow-[0_4px_12px_rgba(196,105,91,0.3)] hover:bg-[#b05a4d] transition-colors"
                  >
                    Continue
                  </button>
                  <button
                    onClick={() => setIsSheetOpen(false)}
                    className="w-full h-[56px] rounded-full bg-[#F5F5F5] text-[#1F1F1F] text-[17px] font-semibold hover:bg-[#EBEBEB] transition-colors"
                  >
                    Not now
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
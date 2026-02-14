import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import svgPaths from "../imports/svg-0k8jgopwj0";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why are there so many products in the Traya kit?",
      answer: "Hair loss has multiple causes. Your kit includes supplements and topical treatments designed to work together for complete recovery."
    },
    {
      question: "What will happen once I buy the plan? When will a hair coach be provided?",
      answer: "After purchasing, you'll be assigned a dedicated hair coach who will guide you through your journey and answer any questions."
    },
    {
      question: "Why is Traya solution so expensive?",
      answer: "Our solution is personalized and science-backed, using high-quality ingredients and including professional coaching support."
    },
    {
      question: "Is it safe to consume along with other supplements?",
      answer: "Yes, but we recommend consulting with your doctor if you are on specific medication or have existing health conditions."
    }
  ];

  return (
    <div className="py-6 flex flex-col gap-6 max-w-[411px] mx-auto px-4 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#404040] text-lg font-medium">Questions?</h2>
          <p className="text-[#b3b3b3] text-lg font-medium">We got you!</p>
        </div>
        <div className="bg-white border border-[#ececec] rounded-full px-3 py-2 flex items-center gap-1 shadow-sm">
          <svg className="size-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2ae2ec00} fill="#404040" />
          </svg>
          <span className="text-[#404040] text-sm font-medium">EN</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-[#ececec] pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between text-left gap-4"
            >
              <p className="text-[#404040] text-sm font-medium leading-5">{faq.question}</p>
              <svg
                className={`size-5 transition-transform ${openIndex === idx ? "rotate-0" : "rotate-0"}`}
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d={openIndex === idx ? svgPaths.p1bb75c00 : svgPaths.p37d35b00}
                  fill="#404040"
                />
              </svg>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.15, ease: "linear" }}
                  className="overflow-hidden"
                >
                  <p className="text-[#8c8c8c] text-sm font-medium leading-5">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

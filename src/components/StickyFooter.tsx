import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const USPs = [
  "30 days money back guarantee",
  "ISO certified",
  "8L+ customers",
  "93% customers had results"
];

export function StickyFooter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % USPs.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 shadow-[0px_-5px_6px_0px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-[411px] mx-auto flex flex-col">
        <div className="bg-[#e2b4ad] py-4 text-center rounded-t-xl overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ x: 4, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -4, opacity: 0 }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="text-[#333] text-sm font-medium absolute w-full px-4"
            >
              {USPs[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex items-center bg-white justify-between px-4 py-3 border-t border-[#ececec]">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="text-[#404040] text-lg font-medium">₹1965</p>
              <p className="text-[#8c8c8c] text-sm font-medium line-through">₹2792</p>
            </div>
            <p className="text-[#8c8c8c] text-sm font-medium">Inclusive all taxes</p>
          </div>
          <button className="bg-[#c4695b] text-[#f9f0ef] px-6 py-4 rounded-xl text-lg font-medium w-[200px]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

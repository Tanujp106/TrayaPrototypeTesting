import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-pncvdqg35b";
import imgImage570 from "figma:asset/a9ca5be24b65331f3941b96977867a8bcda224f4.png";
import imgImage561 from "figma:asset/ec19e61995a7f55c477e74a162b5e96101401c30.png";

interface TestimonialData {
  id: string;
  name: string;
  age: string;
  location: string;
  quoteParts: { text: string; highlight?: boolean }[];
  image: string;
  imageConfig: {
    month1: {
      height: string;
      left: string;
      top: string;
      width: string;
    };
    month3: {
      height: string;
      left: string;
      top: string;
      width: string;
    };
    month6: {
      height: string;
      left: string;
      top: string;
      width: string;
    };
  };
}

const TESTIMONIALS: TestimonialData[] = [
  {
    id: "t1",
    name: "Riddhi",
    age: "25",
    location: "Mumbai",
    quoteParts: [
      { text: "“Kaafi time se hair thinning ho raha tha aur kuch kaam nahi kar raha tha. Traya start karne ke baad " },
      { text: "hair fall control", highlight: true },
      { text: " hua aur new ", highlight: false },
      { text: "growth bhi dikhne lagi”", highlight: true },
    ],
    image: imgImage570,
    imageConfig: {
      month1: {
        height: "376.89%",
        left: "-17.58%",
        top: "-46.22%",
        width: "360.44%",
      },
      month3: {
        height: "371.93%",
        left: "-128.26%",
        top: "-43.86%",
        width: "356.52%",
      },
      month6: {
        height: "365.52%",
        left: "-248.6%",
        top: "-43.1%",
        width: "366.48%",
      },
    },
  },
  {
    id: "t2",
    name: "Riddhi",
    age: "25",
    location: "Mumbai",
    quoteParts: [
      { text: "“Kaafi time se hair thinning ho raha tha aur kuch kaam nahi kar raha tha. Traya start karne ke baad " },
      { text: "hair fall control", highlight: true },
      { text: " hua aur new ", highlight: false },
      { text: "growth bhi dikhne lagi”", highlight: true },
    ],
    image: imgImage561,
    imageConfig: {
      month1: {
        height: "384.22%",
        left: "-19.06%",
        top: "-47.78%",
        width: "356.96%",
      },
      month3: {
        height: "384.22%",
        left: "-242.31%",
        top: "-47.06%",
        width: "356.96%",
      },
      month6: {
        height: "384.22%",
        left: "-242.31%",
        top: "-47.06%",
        width: "356.96%",
      },
    },
  },
  {
    id: "t3",
    name: "Riddhi",
    age: "25",
    location: "Mumbai",
    quoteParts: [
      { text: "“Kaafi time se hair thinning ho raha tha aur kuch kaam nahi kar raha tha. Traya start karne ke baad " },
      { text: "hair fall control", highlight: true },
      { text: " hua aur new ", highlight: false },
      { text: "growth bhi dikhne lagi”", highlight: true },
    ],
    image: imgImage570,
    imageConfig: {
        month1: {
          height: "376.89%",
          left: "-17.58%",
          top: "-46.22%",
          width: "360.44%",
        },
        month3: {
          height: "371.93%",
          left: "-128.26%",
          top: "-43.86%",
          width: "356.52%",
        },
        month6: {
          height: "365.52%",
          left: "-248.6%",
          top: "-43.1%",
          width: "366.48%",
        },
      },
  },
];

function BeenhereIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.pf524600} fill="#404040" />
      </svg>
    </div>
  );
}

function CircleIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p3a034900} fill="#404040" />
      </svg>
    </div>
  );
}

function TestimonialCard({ data }: { data: TestimonialData }) {
  // Using w-[370px] to strictly match design aspect ratios for the image masks
  return (
    <div className="bg-[#f9f0ef] flex flex-col gap-[16px] items-start overflow-hidden p-[16px] relative rounded-[12px] shrink-0 w-[370px] snap-start">
      {/* Images Row */}
      <div className="flex gap-[16px] h-[129px] items-start relative shrink-0 w-full">
        {/* Month 1 */}
        <div className="flex-[1_0_0] h-[129px] overflow-hidden relative rounded-[12px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
            <img
              alt=""
              className="absolute max-w-none"
              style={data.imageConfig.month1}
              src={data.image}
            />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] h-[59px] left-0 top-[70px] w-full" />
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-['Inter',sans-serif] font-medium text-[#edd2ce] text-[14px] text-center whitespace-nowrap">
            Month 1
          </p>
        </div>

        {/* Month 3 */}
        <div className="flex-[1_0_0] h-[129px] overflow-hidden relative rounded-[12px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
            <img
              alt=""
              className="absolute max-w-none"
              style={data.imageConfig.month3}
              src={data.image}
            />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] h-[59px] left-0 top-[70px] w-full" />
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-['Inter',sans-serif] font-medium text-[#edd2ce] text-[14px] text-center whitespace-nowrap">
            Month 3
          </p>
        </div>

        {/* Month 6 */}
        <div className="flex-[1_0_0] h-[129px] overflow-hidden relative rounded-[12px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
            <img
              alt=""
              className="absolute max-w-none"
              style={data.imageConfig.month6}
              src={data.image}
            />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] h-[59px] left-0 top-[70px] w-full" />
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-['Inter',sans-serif] font-medium text-[#edd2ce] text-[14px] text-center whitespace-nowrap">
            Month 6
          </p>
        </div>
      </div>

      {/* Quote & Info */}
      <div className="flex flex-col font-['Inter',sans-serif] font-medium gap-[16px] items-start text-[#404040] w-full">
        <p className="text-[16px] leading-[22px] w-full">
          {data.quoteParts.map((part, idx) => (
            <span
              key={idx}
              className={part.highlight ? "text-[#c4695b]" : ""}
            >
              {part.text}
            </span>
          ))}
        </p>
        <div className="flex flex-col gap-[2px] text-[14px] leading-[20px] w-full">
          <p>{data.name}, {data.age}</p>
          <p>{data.location}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-[8px] items-start relative shrink-0">
        <div className="bg-[#edd2ce] flex gap-[4px] items-center pl-[8px] pr-[12px] py-[4px] relative rounded-[100px] shrink-0 border border-[#dca59d]">
          <BeenhereIcon />
          <p className="font-['Inter',sans-serif] font-medium text-[#404040] text-[12px] text-center">
            Traya customer
          </p>
        </div>
        <div className="bg-[#edd2ce] flex gap-[4px] items-center pl-[8px] pr-[12px] py-[4px] relative rounded-[100px] shrink-0 border border-[#dca59d]">
          <CircleIcon />
          <p className="font-['Inter',sans-serif] font-medium text-[#404040] text-[12px] text-center">
            Similar hair concerns
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 370 + 16; // width + gap
      // Center threshold
      const index = Math.round((scrollLeft + 10) / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, index), TESTIMONIALS.length - 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 370 + 16;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % TESTIMONIALS.length;
      scrollToCard(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="py-8 flex flex-col gap-6 max-w-[411px] mx-auto overflow-hidden font-['Inter',sans-serif]">
      {/* Header */}
      <div className="px-4 flex flex-col gap-1 items-start">
        <h2 className="text-[#404040] text-[18px] font-medium leading-normal text-left">
          We can help you get there
        </h2>
        <p className="text-[#8c8c8c] text-[18px] font-medium leading-normal text-left">
          With personalized treatment, our users see improvements within 8–12 weeks.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex flex-col gap-6">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-pl-4 pb-2"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-[#dca59d] size-[8px]" // Active: darker pink (as per Frame33/35)
                  : "bg-[#edd2ce] size-[8px]" // Inactive: lighter pink (as per Frame36/37)
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

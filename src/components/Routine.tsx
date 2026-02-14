import { useState, useEffect, useRef, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-0k8jgopwj0";
import imgImagePhotoroom51 from "figma:asset/1707e174d182d2f0a2602a7c5e4839b03852d99d.png";
import imgImage40 from "figma:asset/725bd36b74bc4f30546e05b89c90b905eea5e1c2.png";

export interface Product {
  id: string;
  step: string;
  name: string;
  price: string;
  oldPrice: string;
  added: boolean;
  tag: string;
  image: string;
}

const MORNING_PRODUCTS: Product[] = [
  {
    id: "morning-1",
    step: "Step 1",
    name: "Defence shampoo",
    price: "₹267",
    oldPrice: "₹540",
    added: true,
    tag: "Reduces Dandruff",
    image: imgImagePhotoroom51,
  },
  {
    id: "morning-2",
    step: "Step 2",
    name: "Minoxidil 2%, Alcohol-free",
    price: "₹340",
    oldPrice: "₹540",
    added: false,
    tag: "Strengthen Follicles",
    image: imgImage40,
  },
  {
    id: "morning-3",
    step: "Step 3",
    name: "Hair Vitamin Gummies",
    price: "FREE",
    oldPrice: "₹540",
    added: true,
    tag: "Nutrition Support",
    image: imgImage40,
  },
];

const NIGHT_PRODUCTS: Product[] = [
  {
    id: "night-1",
    step: "Step 1",
    name: "Hair Ras",
    price: "₹450",
    oldPrice: "₹650",
    added: false,
    tag: "Ayurvedic Blend",
    image: imgImagePhotoroom51,
  },
  {
    id: "night-2",
    step: "Step 2",
    name: "Sleep Support Tablets",
    price: "₹320",
    oldPrice: "₹500",
    added: true,
    tag: "Better Sleep",
    image: imgImage40,
  },
  {
    id: "night-3",
    step: "Step 3",
    name: "Scalp Oil",
    price: "₹399",
    oldPrice: "₹599",
    added: false,
    tag: "Deep Nourishment",
    image: imgImagePhotoroom51,
  },
];

function CheckIcon() {
  const id = useId();
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="check"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id={`check-${id}`}>
          <mask
            height="20"
            id={`mask-${id}`}
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="#D9D9D9"
              height="20"
              width="20"
            />
          </mask>
          <g mask={`url(#mask-${id})`}>
            <path
              d={svgPaths.p115c8200}
              fill="#C4695B"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface RoutineProps {
  morningProducts?: Product[];
  nightProducts?: Product[];
  variant?: "carousel" | "list";
}

export function Routine({
  morningProducts: initialMorningProducts = MORNING_PRODUCTS,
  nightProducts: initialNightProducts = NIGHT_PRODUCTS,
  variant: initialVariant = "carousel",
}: RoutineProps) {
  const [activeTab, setActiveTab] = useState("Morning");
  const [viewVariant, setViewVariant] = useState(initialVariant);
  const [morningProducts, setMorningProducts] = useState<Product[]>(initialMorningProducts);
  const [nightProducts, setNightProducts] = useState<Product[]>(initialNightProducts);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Get current products based on active tab
  const currentProducts = activeTab === "Morning" ? morningProducts : nightProducts;

  // Reset carousel index when switching tabs
  useEffect(() => {
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  // Track scroll position to update dot indicators
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 240 + 16; // card width (240px) + gap (16px)
      // Account for the padding
      const adjustedScroll = scrollLeft + 10; // Center threshold
      const index = Math.round(adjustedScroll / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, index), currentProducts.length - 1));
    }
  };

  // Scroll to specific card when clicking a dot
  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 240 + 16; // card width (240px) + gap (16px)
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const toggleProduct = (id: string) => {
    if (activeTab === "Morning") {
      setMorningProducts((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, added: !p.added } : p,
        ),
      );
    } else {
      setNightProducts((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, added: !p.added } : p,
        ),
      );
    }
  };

  return (
    <div className="pt-2 pb-8 flex flex-col gap-6 max-w-[411px] mx-auto overflow-hidden bg-white font-['Inter',sans-serif]">
      <div className="px-4 flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-[#404040] font-medium tracking-tight text-[18px]">
            Personalized Routine
          </h2>
          <p className="text-[#8c8c8c] font-medium text-[18px]">
            Just 2 steps. Less than 10 minutes a day.
          </p>
        </div>
      </div>

      <div className="px-4 flex gap-3">
        <button
          onClick={() => setActiveTab("Morning")}
          className={`flex items-center gap-2 pr-5 pl-3 py-3 rounded-full border transition-all font-semibold text-[14px] ${
            activeTab === "Morning"
              ? "bg-[#f9f0ef] border-[#c4695b] text-[#c4695b]"
              : "bg-white border-[#ececec] text-[#404040]"
          }`}
        >
          <svg
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d={svgPaths.pc30f900}
              fill={
                activeTab === "Morning" ? "#c4695b" : "#404040"
              }
            />
          </svg>
          Morning
        </button>
        <button
          onClick={() => setActiveTab("Night")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-all font-semibold text-[14px] ${
            activeTab === "Night"
              ? "bg-[#f9f0ef] border-[#c4695b] text-[#c4695b]"
              : "bg-white border-[#ececec] text-[#404040]"
          }`}
        >
          <svg
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d={svgPaths.p6f88b00}
              fill={
                activeTab === "Night" ? "#c4695b" : "#404040"
              }
            />
          </svg>
          Night
        </button>
      </div>

      <AnimatePresence mode="wait">
        {viewVariant === "carousel" ? (
          <motion.div
            key={`carousel-wrapper-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-3"
          >
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-pl-4"
            >
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-[#EDEBEB] rounded-[12px] p-[16px] w-[240px] flex-shrink-0 flex flex-col gap-[8px] relative snap-start"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center px-[8px] py-[4px] relative rounded-[40px] border border-[#b3b3b3]">
                      <span className="text-[#404040] text-[12px] font-medium leading-none">
                        {product.step}
                      </span>
                    </div>
                    <button className="text-[#8c8c8c] text-[14px] font-medium leading-[20px]">
                      Why we picked it?
                    </button>
                  </div>

                  <div className="h-[188px] w-full relative flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-auto object-contain pointer-events-none"
                    />
                  </div>

                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <div className="bg-[#edd2ce] px-[12px] py-[6px] rounded-[40px] w-fit">
                      <p className="text-[#333] font-medium leading-none text-[14px]">
                        {product.tag}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-[8px] w-full">
                      <h3 className="text-[#1a1a1a] text-[16px] font-medium leading-[22px] line-clamp-2 h-fit">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-between w-full pt-[4px]">
                        <div className="flex items-center gap-[8px]">
                          <p className="text-[#ca8f4f] text-[16px] font-medium leading-[22px]">
                            {product.price}
                          </p>
                          <p className="text-[#8c8c8c] text-[14px] font-medium leading-[20px] line-through">
                            {product.oldPrice}
                          </p>
                        </div>
                        
                        <button
                          onClick={() => toggleProduct(product.id)}
                          className="relative transition-all duration-200 active:scale-95"
                        >
                          {product.added ? (
                            <div className="flex gap-[2px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[5px] border border-[#EDEBEB] bg-white min-w-[70px]">
                              <CheckIcon />
                              <p className="text-[#c4695b] text-[14px] font-medium leading-[20px]">
                                Added
                              </p>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center px-[16px] py-[4px] rounded-[5px] bg-[#c4695b] text-white min-w-[70px]">
                              <p className="text-[14px] font-bold leading-[20px]">
                                Add
                              </p>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            
            
          </motion.div>
        ) : (
          <motion.div
            key={`list-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4 px-4"
          >
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 bg-white p-4 rounded-2xl border border-[#ececec] shadow-sm"
              >
                <div className="size-20 bg-[#f9f0ef]/30 rounded-xl overflow-hidden p-2 shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[14px] font-bold text-[#1a1a1a]">
                        {product.name}
                      </h4>
                      <p className="text-[10px] font-bold text-[#c4695b] mt-0.5 tracking-tight">
                        {product.tag}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleProduct(product.id)}
                      className="shrink-0"
                    >
                      {product.added ? (
                        <div className="flex gap-[1px] items-center justify-center pl-[2px] pr-[6px] py-[2px] rounded-[5px] border border-[#EDEBEB]">
                          <div className="scale-75 origin-center">
                            <CheckIcon />
                          </div>
                          <span className="text-[#c4695b] text-[12px] font-medium">
                            Added
                          </span>
                        </div>
                      ) : (
                        <div className="px-3 py-1 bg-[#c4695b] rounded-[5px] text-white text-[12px] font-bold">
                          Add
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-bold text-[#ca8f4f]">
                      {product.price}
                    </p>
                    <p className="text-[11px] font-medium text-[#8c8c8c] line-through">
                      {product.oldPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

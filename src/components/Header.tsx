import image_65dda438c6f0e670b4df3487db8be5b1a0a921ea from 'figma:asset/65dda438c6f0e670b4df3487db8be5b1a0a921ea.png'
import svgPaths from "../imports/svg-0k8jgopwj0";
import imgImage11 from "figma:asset/1eaf808b9c9f5258a94942d5e492c950b4ceb683.png";

export function Header() {
  return (
    <div className="bg-white sticky top-0 z-50 w-full border-b border-[#ececec]">
      <div className="flex items-center justify-between px-4 py-4 max-w-[411px] mx-auto">
        <div className="h-6 w-[76px]">
          <img src={image_65dda438c6f0e670b4df3487db8be5b1a0a921ea} alt="Traya" className="h-full w-full object-contain" />
        </div>
        <div className="relative">
          <div className="size-8 flex items-center justify-center">
            <svg className="size-full" fill="none" viewBox="0 0 32 32">
              <path d={svgPaths.p141f4700} fill="#1A1A1A" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 size-[10px] bg-[#E24B4B] rounded-full border border-white" />
        </div>
      </div>
    </div>
  );
}

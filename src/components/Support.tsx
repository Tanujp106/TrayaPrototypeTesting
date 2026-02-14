import imgGeminiGeneratedImageIzle3Hizle3HizlePhotoroom1 from "figma:asset/3c92514a81cfe8dc15834f05a31d39cd07f02438.png";
import imgImagePhotoroom1 from "figma:asset/c8861b364d7992414734c8097cb915d07b916910.png";

export function Support() {
  return (
    <div className="pt-2 pb-6 flex flex-col gap-5 max-w-[411px] mx-auto overflow-hidden">
      <div className="px-4">
        <h2 className="text-[#404040] text-lg font-medium">Support you can rely on</h2>
        <p className="text-[#8c8c8c] text-lg font-medium">designed to help you in journey.</p>
      </div>

      <div className="px-4">
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x">
          {/* Card 1 */}
          <div className="bg-[#f9f0ef] border border-[#e7c3bd] rounded-xl relative min-w-full h-[363px] overflow-hidden snap-center">
            <img 
              src={imgGeminiGeneratedImageIzle3Hizle3HizlePhotoroom1} 
              alt="Hair Coach" 
              className="absolute -left-5 -top-4 w-[407px] h-[407px] object-cover"
            />
            
            <div className="absolute top-[136px] right-4 bg-[#ead2b9] px-3 py-2 rounded-l-xl rounded-tr-xl w-[210px]">
              <p className="text-[#1a1a1a] font-medium text-[13px]">Hi, I have questions about my hair treatment</p>
            </div>
            
            <div className="absolute top-[200px] left-4 bg-[#e2b4ad] px-3 py-2 rounded-r-xl rounded-tl-xl w-[160px]">
              <p className="text-[#1a1a1a] font-medium text-[13px]">Hello, how can I help?</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4 pt-12 bg-gradient-to-t from-[#f3e1de] via-[#f3e1de]/90 to-transparent">
              <div className="flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[#1a1a1a] text-lg font-medium">Hair Coach Support</p>
                  <p className="text-[#404040] text-sm font-medium leading-5">Monitors your progress and guides your treatment</p>
                </div>
                <div className="flex items-center gap-2 pb-1">
                  <div className="bg-[#c4695b] px-3 py-1 rounded">
                    <p className="text-[#f9f0ef] text-sm font-medium uppercase">Free</p>
                  </div>
                  <p className="text-[#404040] text-base font-medium line-through">₹300</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (Partial simulation) */}
          <div className="bg-[#f9f0ef] border border-[#e7c3bd] rounded-xl relative min-w-full h-[363px] overflow-hidden snap-center">
             <img 
              src={imgImagePhotoroom1} 
              alt="Diet Plan" 
              className="absolute left-[72px] -top-6 w-[240px] h-[428px] object-cover transform rotate-180"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 pt-12 bg-gradient-to-t from-[#f3e1de] via-[#f3e1de]/90 to-transparent">
              <div className="flex items-end justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-[#1a1a1a] text-lg font-medium">Flexible Diet Plan</p>
                  <p className="text-[#404040] text-sm font-medium leading-5">Nutritious homely recipes to support your hair health</p>
                </div>
                <div className="flex items-center gap-2 pb-1">
                  <div className="bg-[#c4695b] px-3 py-1 rounded">
                    <p className="text-[#f9f0ef] text-sm font-medium uppercase">Free</p>
                  </div>
                  <p className="text-[#404040] text-base font-medium line-through">₹200</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          <div className="size-2 rounded-full bg-[#dca59d]" />
          <div className="size-2 rounded-full bg-[#edd2ce]" />
        </div>
      </div>
    </div>
  );
}

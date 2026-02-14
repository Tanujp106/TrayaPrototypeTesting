import svgPaths from "../imports/svg-0k8jgopwj0";
import imgImagePhotoroom61 from "figma:asset/a520b752cd6a1a62c0afd757a1b0896ffc07d634.png";
import imgImagePhotoroom42 from "figma:asset/241f454384bc2a49e31a7ca481caa7b03971d108.png";
import imgImage40 from "figma:asset/725bd36b74bc4f30546e05b89c90b905eea5e1c2.png";

export function RecommendedProducts() {
  const products = [
    {
      badge: "Most loved",
      rating: "4.5",
      reviews: "2.2k",
      name: "Hair Ras Ayurvedic Hair Herbs",
      price: "₹340",
      oldPrice: "₹540",
      image: imgImagePhotoroom61,
      tag: "Strengthen Follicles"
    },
    {
      badge: "Strong fit",
      rating: "4.5",
      reviews: "2.2k",
      name: "Hair Actives Serum",
      price: "₹340",
      oldPrice: "₹540",
      image: imgImagePhotoroom42,
      tag: "Strengthen Follicles"
    },
    {
        badge: "Step 1",
        rating: "4.5",
        reviews: "2.2k",
        name: "Minoxidil 2%, Alcohol-free",
        price: "FREE",
        oldPrice: "₹540",
        image: imgImage40,
        tag: "Strengthen Follicles"
      }
  ];

  return (
    <div className="py-6 flex flex-col gap-5 max-w-[411px] mx-auto overflow-hidden">
      <div className="px-4">
        <h2 className="text-[#404040] text-lg font-medium">Recommended products just for you</h2>
        <p className="text-[#8c8c8c] text-lg font-medium">9 picked from 846 items</p>
      </div>

      <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white border border-[#ececec] rounded-xl p-4 min-w-[220px] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="px-2 py-1 border border-[#b3b3b3] rounded-full text-[#404040] text-xs font-medium">
                {product.badge}
              </div>
              <div className="flex items-center gap-[2px]">
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p16b202c0} fill="#404040" />
                </svg>
                <span className="text-[#404040] text-sm font-medium">{product.rating}</span>
                <span className="text-[#404040] text-xs font-medium">({product.reviews})</span>
              </div>
            </div>

            <div className="aspect-square w-full relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-[#edd2ce] px-2 py-1 rounded-full w-fit">
                <p className="text-[#333] text-xs font-medium">{product.tag}</p>
              </div>
              <p className="text-[#1a1a1a] text-base font-medium h-12 line-clamp-2">{product.name}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 font-medium">
                  <p className="text-[#ca8f4f] text-base">{product.price}</p>
                  <p className="text-[#8c8c8c] text-sm line-through">{product.oldPrice}</p>
                </div>
                
                <button className="bg-[#c4695b] text-white px-3 py-1 rounded flex items-center gap-1 text-sm font-medium">
                  <svg className="size-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.pf9db040} fill="white" />
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

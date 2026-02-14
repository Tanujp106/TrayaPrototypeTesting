import { Header } from "./components/Header";
import { useMobileView } from "./hooks/useMobileView";
import { Hero } from "./components/Hero";
import { RootCauses } from "./components/RootCauses";
import { HairNeeds } from "./components/HairNeeds";
import { Routine } from "./components/Routine";
import { Support } from "./components/Support";
import { RecoveryJourney } from "./components/RecoveryJourney";
import { RecommendedProducts } from "./components/RecommendedProducts";
import { Testimonials } from "./components/Testimonials";
import { FAQs } from "./components/FAQs";
import { StickyFooter } from "./components/StickyFooter";

export default function App() {
  const isMobile = useMobileView();

  if (!isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-['Inter',sans-serif]">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Desktop View Not Supported</h1>
          <p className="text-gray-600">Supported only on Mobile View</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Container to match mobile width from Figma */}
      <div className="max-w-[450px] mx-auto pb-[120px]">
        <Header />
        <Hero />
        <RootCauses />
        <HairNeeds />
        <Routine />
        <Support />
        <RecoveryJourney />
        <RecommendedProducts />
        <Testimonials />
        <FAQs />
      </div>
      <StickyFooter />
    </div>
  );
}

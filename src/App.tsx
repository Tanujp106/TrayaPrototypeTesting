import { Header } from "./components/Header";

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

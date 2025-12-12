"use client";

import Usps from "./components/Usps";
import YourResults from "./components/YourResults";
import LawnStep from "./components/LawnStep";
import TurfVarieties from "./components/TurfVarieties";
import ChooseRightTurf from "./components/ChooseRightTurf";
import HeroSection from "./components/HeroSection";
import ReadyForLife from "./components/ReadyForLife";
import PromoBanner from "./components/PromoBanner";
import PartnerSplitHero from "./components/PartnerSplitHero";
import TurfSupplier from "./components/TurfSupplier";
import BlogSlider from "./components/BlogSlider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Usps />
      <TurfVarieties />
      <ChooseRightTurf />
      <YourResults />
      <LawnStep />
      <ReadyForLife />
      <PromoBanner
        bgImage="/images/choose-bg.jpg"
        productImage="/images/promo-banner.png"
        title="Complimentary lawn starter"
        subtitle="with turf orders over 50m2"
        buttonText="BUY NOW"
        buttonLink="/buy"
      />
      <PartnerSplitHero />
      <TurfSupplier />
      <BlogSlider />
    </>
  );
}

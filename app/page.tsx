"use client";

import Usps from "./components/Usps";
import YourResults from "./components/YourResults";
import LawnStep from "./components/LawnStep";
import TurfVarieties from "./components/TurfVarieties";
import ChooseRightTurf from "./components/ChooseRightTurf";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Usps />
      <TurfVarieties />
      <ChooseRightTurf />
      <YourResults />
      <LawnStep />
    </>
  );
}

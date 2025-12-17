"use client";

import ComponentLawnStepNumber from "@/app/components/ComponentLawnStepNumber";
import ComponentLawnStep from "@/app/components/ComponentLawnStep";
import ComponentProductCard from "@/app/components/ComponentProductCard";

export default function Home() {
  return (
    <div className="py-20">
      <ComponentLawnStep />
      <div className="mt-20">
        <ComponentLawnStepNumber />
      </div>
      <div className="mt-20">
        <ComponentProductCard />
      </div>
    </div>
  );
}

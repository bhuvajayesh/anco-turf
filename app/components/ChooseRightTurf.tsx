"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

const chooseTurf = [
  { id: "shade-tolerance", label: "High Shade tolerance" },
  { id: "weed-resistance", label: "High Weed Resistance" },
  { id: "low-maintenance", label: "Low Maintenance" },
  { id: "wear-tolerance", label: "High Wear Tolerance" },
  { id: "drought-resistance", label: "Drought Resistance" },
];

export default function ChooseRightTurf() {
  const [selectedTurf, setSelectedFeatures] = useState<string[]>([]);
  const toggleTurf = (checkId: string) => {
    if (selectedTurf.includes(checkId)) {
      setSelectedFeatures(selectedTurf.filter((id) => id !== checkId));
    } else if (selectedTurf.length < 3) {
      setSelectedFeatures([...selectedTurf, checkId]);
    }
  };

  return (
    <div className="bg-[url(/images/choose-bg.jpg)] bg-contain md:bg-cover">
      <div className="container mx-auto">
        <div className="text-center py-20 md:py-[60px] text-white">
          <span className="text-[22px] font-medium tracking-[1.4px] uppercase leading-none block mb-3">
            HOW TO FIND THE RIGHT TURF
          </span>
          <SectionTitle title="Choose the 3 most important to you" />
          <div className="grid grid-cols-2 md:flex justify-center gap-5 lg:gap-12 xl:gap-[75px] mt-10 md:mt-[30px]">
            {chooseTurf.map((item, index) => {
              const isSelected = selectedTurf.includes(item.id);
              const isLast = index === chooseTurf.length - 1;
              return (
                <button
                  key={item.id}
                  onClick={() => toggleTurf(item.id)}
                  className={`flex flex-col items-center gap-[15px] group
                    ${isLast
                      ? "col-span-2 justify-self-center"
                      : ""
                    }`}
                >
                  {/* Checkbox Icon */}
                  <div
                    className={`w-6 h-6 rounded-[3px] transition-all duration-200 ${isSelected
                        ? "border border-transparent"
                        : "border border-white"
                      }`}
                  >
                    {isSelected && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1333 17.6L19.5333 8.2L17.6667 6.33333L10.1333 13.8667L6.33333 10.0667L4.46667 11.9333L10.1333 17.6ZM2.66667 24C1.93333 24 1.30556 23.7389 0.783333 23.2167C0.261111 22.6944 0 22.0667 0 21.3333V2.66667C0 1.93333 0.261111 1.30556 0.783333 0.783333C1.30556 0.261111 1.93333 0 2.66667 0H21.3333C22.0667 0 22.6944 0.261111 23.2167 0.783333C23.7389 1.30556 24 1.93333 24 2.66667V21.3333C24 22.0667 23.7389 22.6944 23.2167 23.2167C22.6944 23.7389 22.0667 24 21.3333 24H2.66667Z"
                          fill="#99C555"
                        />
                      </svg>
                    )}
                  </div>
                  {/* Label */}
                  <p className="text-white font-medium 2xl:leading-[27px]">
                    {item.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

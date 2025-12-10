"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./components/Button";
import Usps from "./components/Usps";
import PageTitle from "./components/SectionTitle";
import ourLawnPic from "../public/images/our-lawn-turf.png";
import sirWalterLogo from "../public/images/sir-walter.svg";

const turfVarieties = [
  {
    id: "sir-walter",
    logo: sirWalterLogo,
    name: "Sir Walter DNA Certified",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function Home() {
  const [openVariety, setOpenVariety] = useState<string>("sir-walter");

  const toggleVariety = (id: string) => {
    setOpenVariety(openVariety === id ? "" : id);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden h-screen 2xl:h-[994px] mt-[-125px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/0"></div>
        <div className="container mx-auto h-full flex items-end relative">
          <div className="absolute bottom-48 2xl:bottom-[291px]">
            <p className="text-lg font-medium tracking-[1.2px] uppercase text-white">
              Premium Turf
            </p>
            <h1 className="text-4xl font-medium leading-[1.1] tracking-[0px] uppercase text-white my-2.5">
              PERFECT LAWNS
            </h1>
            <p className="text-lg font-medium leading-[1.5] text-white">
              Designed To Thrive in Australian Conditions.
            </p>
            <div className="flex gap-2.5 mt-10">
              <Button
                variant="primary"
                className="py-[22px] px-[30px] border border-white text-white"
              >
                Get started
              </Button>
              <Button
                variant="primary"
                className="py-[22px] px-[30px] border border-white text-white"
              >
                Lawn Varieties
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Usps />
      <div className="py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <PageTitle title="Our Lawn Turf Varieties" />
            <p className="mt-5 leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been the <br /> industry's standard dummy
              text.
            </p>
          </div>
          <div className="flex gap-5 mt-10">
            <div className="flex-1 overflow-hidden rounded-[20px]">
              <Image
                src={ourLawnPic}
                alt="Our Lawn"
                className="w-full transition-transform duration-300 hover:scale-102"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2.5">
                {turfVarieties.map((variety) => {
                  const isOpen = openVariety === variety.id;
                  return (
                    <div
                      key={variety.id}
                      className="bg-[#F6F6F6] rounded-[20px] overflow-hidden transition-all duration-300"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleVariety(variety.id)}
                        className="w-full px-[30px] py-[17.5px] flex items-center justify-between"
                      >
                        <div className="flex items-center gap-[30px]">
                          <Image
                            src={variety.logo}
                            alt=""
                            width={200}
                            height={80}
                            className="h-16 2xl:h-20"
                          />
                          <h3 className="text-[28px] leading-[30px]">
                            {variety.name}
                          </h3>
                        </div>
                        {/* <ChevronDown
                          className={`w-[20px] h-[20px] text-[#cccccc] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                            }`}
                        /> */}
                      </button>

                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "max-h-none opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-[24px] pb-[24px] pt-0">
                          <p className="font-['Basis_Grotesque_Arabic_Pro'] text-[13px] leading-[1.7] text-[#666666] mb-[20px]">
                            {variety.description}
                          </p>
                          <div className="flex gap-[12px]">
                            <button className="px-[24px] py-[12px] bg-white text-[#5d9732] font-['Basis_Grotesque_Arabic_Pro'] text-[11px] tracking-[1px] uppercase rounded-[4px] hover:bg-[#5d9732] hover:text-white transition-colors border border-[#5d9732]">
                              View Detail
                            </button>
                            <button className="px-[24px] py-[12px] bg-[#5d9732] text-white font-['Basis_Grotesque_Arabic_Pro'] text-[11px] tracking-[1px] uppercase rounded-[4px] hover:bg-[#4a7828] transition-colors">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

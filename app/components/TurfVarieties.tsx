"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

import ourLawnPic1 from "../../public/images/our-lawn-turf.png";
import ourLawnPic2 from "../../public/images/accordion-maintenance.jpg";
import arrowIcon from "../../public/images/arrow-down.svg";
import sirWalterLogo from "../../public/images/sir-walter.svg";
import tiftufHybridLogo from "../../public/images/tiftuf.svg";
import eurekaKikuyuLogo from "../../public/images/eureka-kikuyu.svg";
import sirGrangeLogo from "../../public/images/sir-grange.svg";
import rtfTallLogo from "../../public/images/rtf-tall-fescue.svg";
import nullarborSantaLogo from "../../public/images/nullarbor-santa-ana.svg";

const accordionData = [
  {
    id: 0,
    image: ourLawnPic1,
    logo: sirWalterLogo,
    name: "Sir Walter DNA Certified",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 1,
    image: ourLawnPic2,
    logo: tiftufHybridLogo,
    name: "Tiftuf Hybrid Bermuda",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    image: ourLawnPic1,
    logo: eurekaKikuyuLogo,
    name: "Eureka Kikuyu",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    image: ourLawnPic2,
    logo: sirGrangeLogo,
    name: "Sir Grange Zoysia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    image: ourLawnPic1,
    logo: rtfTallLogo,
    name: "RTF Tall Fescue",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    image: ourLawnPic2,
    logo: nullarborSantaLogo,
    name: "Nullarbor Santa Ana",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function TurfVarieties() {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="pt-20 pb-[60px] md:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <SectionTitle title="Our Lawn Turf Varieties" />
          <p className="mt-5 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the <br /> industry's standard dummy
            text.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <div className="flex-1 sticky top-0 rounded-[20px] overflow-hidden hidden md:block">
            <Image
              src={accordionData[activeIndex].image}
              alt="Accordion Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="space-y-2.5 2xl:space-y-3">
              {accordionData.map((item) => {
                const isOpen = activeIndex === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-[#F6F6F6] rounded-[20px] overflow-hidden transition-all duration-300 md:px-[30px] pt-[26px] md:py-[17.5px]"
                  >
                    <button
                      onClick={() => setActiveIndex(item.id)}
                      className="w-full flex items-center justify-between pb-5 md:pb-0 px-5 md:px-0"
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-3 lg:gap-5 2xl:gap-[30px]">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={200}
                          height={80}
                          className="h-14 md:h-10 lg:h-14 2xl:h-20 w-auto"
                        />
                        <h3 className="text-[28px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] 2xl:leading-[30px] text-left">
                          {item.name}
                        </h3>
                      </div>

                      <Image
                        src={arrowIcon}
                        alt="Arrow"
                        width={24}
                        height={24}
                        className={`w-6 h-6 transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden ${isOpen
                        ? "opacity-100 md:pt-5"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-5 md:px-0 pb-10 md:pb-[12.5px]">
                        <div className="pt-[15px] border-t border-[#436727]">
                          <p className="md:text-[15px] 2xl:text-base leading-6 text-[#404040] mb-4">
                            {item.description}
                          </p>

                          <div className="flex gap-3 md:gap-5">
                            <Button
                              variant="primary"
                              className="tracking-[0.7px]! md:min-w-[156px] flex-1 md:flex-none"
                            >
                              View Detail
                            </Button>
                            <Button
                              variant="secondary"
                              className="tracking-[0.7px]! md:min-w-[156px] flex-1 md:flex-none"
                            >
                              Buy Now
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[20px] overflow-hidden md:hidden">
                        <Image
                          src={accordionData[activeIndex].image}
                          alt="Accordion Image"
                          className="w-full h-auto object-cover"
                        />
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
  );
}

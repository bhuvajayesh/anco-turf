import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import ourLawnPic from "../../public/images/our-lawn-turf.png";
import arrowIcon from "../../public/images/arrow-down.svg";
import sirWalterLogo from "../../public/images/sir-walter.svg";
import tiftufHybridLogo from "../../public/images/tiftuf.svg";
import eurekaKikuyuLogo from "../../public/images/eureka-kikuyu.svg";
import sirGrangeLogo from "../../public/images/sir-grange.svg";
import rtfTallLogo from "../../public/images/rtf-tall-fescue.svg";
import nullarborSantaLogo from "../../public/images/nullarbor-santa-ana.svg";

const turfVarieties = [
  {
    id: "sir-walter",
    logo: sirWalterLogo,
    name: "Sir Walter DNA Certified",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "tiftuf-hybrid",
    logo: tiftufHybridLogo,
    name: "Tiftuf Hybrid Bermuda",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "eureka-kikuyu",
    logo: eurekaKikuyuLogo,
    name: "Eureka Kikuyu",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "sir-grange-zoysia",
    logo: sirGrangeLogo,
    name: "Sir Grange Zoysia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "rtf-tall-fescue",
    logo: rtfTallLogo,
    name: "RTF Tall Fescue",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "nullarbor-santa",
    logo: nullarborSantaLogo,
    name: "Nullarbor Santa Ana",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function TurfVarieties() {
  const [openVariety, setOpenVariety] = useState<string>("sir-walter");
  const toggleVariety = (id: string) => {
    setOpenVariety(openVariety === id ? "" : id);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <SectionTitle title="Our Lawn Turf Varieties" />
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
              width={810}
              height={923}
              className="w-full h-auto transition-transform duration-300 hover:scale-102"
            />
          </div>
          <div className="flex-1">
            <div className="space-y-2.5 2xl:space-y-3">
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
                      className="w-full px-5 2xl:px-[30px] py-3.5 2xl:py-[17.5px] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-5 2xl:gap-[30px]">
                        <Image
                          src={variety.logo}
                          alt=""
                          width={200}
                          height={80}
                          className="h-14 2xl:h-20 w-auto"
                        />
                        <h3 className="text-2xl 2xl:text-[28px] 2xl:leading-[30px]">
                          {variety.name}
                        </h3>
                      </div>
                      <Image
                        width={24}
                        height={24}
                        className={`w-6 h-6 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        src={arrowIcon}
                        alt="Arrow"
                      />
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out px-5 2xl:px-[30px] ${
                        isOpen ? "max-h-none opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-4 2xl:pb-[30px] pt-4 border-t border-[#436727]">
                        <p className="text-[15px] 2xl:text-base leading-[24px] text-[#404040] mb-4">
                          {variety.description}
                        </p>
                        <div className="flex gap-5">
                          <Button
                            variant="primary"
                            className="2xl:!py-[22px] 2xl:!px-[29px] !tracking-[0.7px] min-w-[156px] text-center"
                          >
                            View Detail
                          </Button>
                          <Button
                            variant="secondary"
                            className="2xl:!py-[22px] 2xl:!px-[29px] !tracking-[0.7px] min-w-[156px] text-center"
                          >
                            Buy Now
                          </Button>
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
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import imgMowing from "@/public/images/accordion-maintenance.jpg";
import imgWatering from "@/public/images/accordion-user.jpg";
import arrowIcon from "../../public/images/arrow-down.svg";
import accordionLogo1 from "@/public/images/accordion-icon1.svg";
import accordionLogo2 from "@/public/images/accordion-icon2.svg";
import accordionLogo3 from "@/public/images/accordion-icon3.svg";
import accordionLogo4 from "@/public/images/accordion-icon4.svg";

const accordionData = [
  {
    id: 0,
    logo: accordionLogo1,
    title: "Maintenance",
    image: imgMowing,
    content: (
      <>
        <p className="mb-4">
          There are so many reasons why Sir Walter is Australia’s  No. 1
          Buffalo. Sir Walter Buffalo Lawn has stood the test of  time, proving
          time and time again that it will go anywhere and grow anywhere; in
          full sun or shade, in extreme heat, frost or drought.
        </p>
        <p>
          Born right here in Australia, since 1997 there has been over 50
          million metres of Sir Walter sold Australia wide - the equivalent to
          350,000 homes. It is versatile and hardy, many factors which cause
          most other lawns a problem. There is really no match for Sir Walter.
        </p>
      </>
    ),
  },
  {
    id: 1,
    logo: accordionLogo2,
    title: "Uses",
    image: imgWatering,
    content: (
      <>
        <p className="mb-4">
          There are so many reasons why Sir Walter is Australia’s  No. 1
          Buffalo. Sir Walter Buffalo Lawn has stood the test of  time, proving
          time and time again that it will go anywhere and grow anywhere; in
          full sun or shade, in extreme heat, frost or drought.
        </p>
        <p>
          Born right here in Australia, since 1997 there has been over 50
          million metres of Sir Walter sold Australia wide - the equivalent to
          350,000 homes. It is versatile and hardy, many factors which cause
          most other lawns a problem. There is really no match for Sir Walter.
        </p>
      </>
    ),
  },
  {
    id: 2,
    logo: accordionLogo3,
    title: "Additional information",
    image: imgMowing,
    content: (
      <>
        <p className="mb-4">
          There are so many reasons why Sir Walter is Australia’s  No. 1
          Buffalo. Sir Walter Buffalo Lawn has stood the test of  time, proving
          time and time again that it will go anywhere and grow anywhere; in
          full sun or shade, in extreme heat, frost or drought.
        </p>
        <p>
          Born right here in Australia, since 1997 there has been over 50
          million metres of Sir Walter sold Australia wide - the equivalent to
          350,000 homes. It is versatile and hardy, many factors which cause
          most other lawns a problem. There is really no match for Sir Walter.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Mowing",
    logo: accordionLogo4,
    image: imgWatering,
    content: (
      <>
        <p className="mb-4">
          There are so many reasons why Sir Walter is Australia’s  No. 1
          Buffalo. Sir Walter Buffalo Lawn has stood the test of  time, proving
          time and time again that it will go anywhere and grow anywhere; in
          full sun or shade, in extreme heat, frost or drought.
        </p>
        <p>
          Born right here in Australia, since 1997 there has been over 50
          million metres of Sir Walter sold Australia wide - the equivalent to
          350,000 homes. It is versatile and hardy, many factors which cause
          most other lawns a problem. There is really no match for Sir Walter.
        </p>
      </>
    ),
  },
];

export default function ComponentAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <div className="space-y-2.5 2xl:space-y-3">
            {accordionData.map((item) => {
              const isOpen = activeIndex === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#F6F6F6] rounded-[20px] overflow-hidden transition-all duration-300 md:px-[30px] pt-5 md:pt-[26px] md:py-[17.5px]"
                >
                  <button
                    onClick={() => setActiveIndex(item.id)}
                    className="w-full flex items-center justify-between pb-5 md:pb-0 px-5 md:px-0"
                  >
                    <div className="flex items-center gap-4 md:gap-3 lg:gap-5 2xl:gap-[30px]">
                      <Image
                        src={item.logo}
                        alt=""
                        width={200}
                        height={80}
                        className="w-20 h-20"
                      />
                      <h3 className="text-[28px] leading-[30px] text-left">
                        {item.title}
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
                    className={`overflow-hidden ease-in-out ${isOpen ? "opacity-100 md:pt-4" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-5 md:px-0 pb-10 md:pb-[22.5px]">
                      <div className="pt-[15px] border-t border-[#3D7303]">
                        <div className="md:text-[15px] 2xl:text-base leading-6">
                          {item.content}
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

        {/* RIGHT – IMAGE */}
        <div className="flex-1 sticky top-0 aspect-video rounded-[20px] overflow-hidden hidden md:block">
          <Image
            src={accordionData[activeIndex].image}
            alt="Accordion Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

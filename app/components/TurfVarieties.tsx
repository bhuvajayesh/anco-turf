"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import arrowIcon from "../../public/images/arrow-down.svg";

type turfVarietiesArray = {
  title: string;
  content: string;
  image: {
    node: {
      mediaItemUrl: string;
    };
  };
  view: {
    target: string;
    title: string;
    url: string;
  };
  buyNowButton: {
    target: string;
    title: string;
    url: string;
  };
};

export default function TurfVarieties({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const apiData = data?.globalSections?.globalSectionsOptions;
  return (
    <div className="pt-20 pb-[60px] md:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <SectionTitle
            title={apiData?.turfvarianttitle || "Our Lawn Turf Varieties"}
          />
          <p className="mt-5 leading-6">
            {apiData?.turfvariantcontent ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting"}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <div className="flex-1 sticky top-0 rounded-[20px] overflow-hidden hidden md:block">
            {apiData?.image?.node?.mediaItemUrl && (
              <Image
                src={apiData?.image?.node?.mediaItemUrl}
                width={600}
                height={500}
                alt="Accordion Image"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex-1">
            <div className="space-y-2.5 2xl:space-y-3">
              {apiData?.turfVarietiesList?.length > 0 &&
                apiData?.turfVarietiesList?.map(
                  (item: turfVarietiesArray, index: number) => {
                    const isOpen = activeIndex === index;
                    return (
                      <div
                        key={index}
                        className="bg-[#F6F6F6] rounded-[20px] overflow-hidden transition-all duration-300 md:px-[30px] pt-[26px] md:py-[17.5px]"
                      >
                        <button
                          onClick={() => setActiveIndex(index)}
                          className="w-full flex items-center justify-between pb-5 md:pb-0 px-5 md:px-0"
                        >
                          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-3 lg:gap-5 2xl:gap-[30px]">
                            <Image
                              src={item?.image?.node?.mediaItemUrl || ""}
                              alt={"image"}
                              width={200}
                              height={80}
                              className="h-14 md:h-10 lg:h-14 2xl:h-20 w-auto"
                            />
                            <h3 className="text-[28px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] 2xl:leading-[30px] text-left">
                              {item.title}
                            </h3>
                          </div>

                          <Image
                            src={arrowIcon}
                            alt="Arrow"
                            width={24}
                            height={24}
                            className={`w-6 h-6 transition-all duration-300 ease-in-out ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden ${
                            isOpen ? "opacity-100 md:pt-5" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-5 md:px-0 pb-10 md:pb-[12.5px]">
                            <div className="pt-[15px] border-t border-[#436727]">
                              <p className="md:text-[15px] 2xl:text-base leading-6 text-[#404040] mb-4">
                                {item.content}
                              </p>

                              <div className="flex gap-3 md:gap-5">
                                <Button
                                  variant="primary"
                                  onClick={() => {
                                    window.open(item?.view?.url || "#");
                                  }}
                                  className="tracking-[0.7px]! md:min-w-[156px] flex-1 md:flex-none"
                                >
                                  {item?.view?.title || "View Detail"}
                                </Button>
                                <Button
                                  variant="secondary"
                                  onClick={() => {
                                    window.open(item?.buyNowButton?.url || "#");
                                  }}
                                  className="tracking-[0.7px]! md:min-w-[156px] flex-1 md:flex-none"
                                >
                                  {item?.buyNowButton?.title || "Buy Now"}
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-[20px] overflow-hidden md:hidden">
                            {apiData?.image?.node?.mediaItemUrl && (
                              <Image
                                src={apiData?.image?.node?.mediaItemUrl}
                                alt="Accordion Image"
                                className="w-full h-auto object-cover"
                                width={600}
                                height={500}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

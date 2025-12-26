"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import faqsImage from "../../public/images/faq-image.png";
import arrowIcon from "../../public/images/arrow-down.svg";
import Button from "./Button";
import { FaqSectionProps } from "../types/types";

/* ---------- COMPONENT ---------- */

export default function FaqSection({ data }: { data: FaqSectionProps }) {
  const apiData = data?.fAQCategories?.nodes || [];
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const activeTabKey = apiData[activeTab]?.name;
  const currentTab = apiData?.find((tab) => tab.name === activeTabKey);
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 2xl:gap-[105px] items-start px-2 md:px-0">
          <div className="w-full lg:w-auto 2xl:w-[815px] flex-1 2xl:flex-none">
            <Image
              src={faqsImage}
              alt=""
              width={815}
              height={680}
              className="object-cover w-full h-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1">
            <div className="mb-10">
              <SectionTitle title="Frequently Asked Questions" />
            </div>
            {/* TABS */}
            <div className="flex gap-2 border-b-2 border-[#F6F6F6] mb-7 md:mb-4 xl:mb-8">
              {apiData?.length > 0 &&
                apiData?.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setOpenIndex(0);
                    }}
                    className={`pb-2.5 md:pb-5 font-medium md:text-sm xl:text-base relative text-small-mobile ${
                      activeTab === index ? "text-[#528917]" : "text-[#404040]"
                    }`}
                  >
                    {tab?.name}
                    {activeTab === index && (
                      <span className="absolute left-0 -bottom-px w-full h-0.5 bg-[#528917]" />
                    )}
                  </button>
                ))}
            </div>

            {/* ACCORDION */}
            <div className="space-y-5 mb-10">
              {/* TAB CONTENT */}
              <div className="space-y-5 mb-10">
                {currentTab?.fAQs?.nodes &&
                  currentTab?.fAQs?.nodes?.length > 0 &&
                  currentTab?.fAQs?.nodes?.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div
                        key={index}
                        className="border-b border-[#528917] pb-2.5 transition-all duration-300"
                      >
                        <button
                          className="w-full flex justify-between items-center leading-8 font-medium"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          <span>{faq.title}</span>
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

                        {isOpen && (
                          <div
                            className="mt-2.5 leading-normal xl:leading-6 md:text-sm xl:text-base"
                            dangerouslySetInnerHTML={{ __html: faq.content }}
                          />
                        )}
                        {/* {isOpen && (
                          <p className="mt-2.5 leading-normal xl:leading-6 md:text-sm xl:text-base">
                            {faq.content}
                          </p>
                        )} */}
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* CTA */}
            <Button variant="primary">VIEW ALL FAQS</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

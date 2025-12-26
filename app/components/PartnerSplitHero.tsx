"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import Link from "next/link";
import { PartnerSplitHeroProps } from "../types/types";

interface stepDataType {
  selectStepContent: string;
  selectStepImage: {
    node: {
      mediaItemUrl: string;
    };
  };
  stepLinkButton: {
    target: string;
    title: string;
    url: string;
  };
}

export default function PartnerSplitHero({
  data,
}: {
  data: PartnerSplitHeroProps;
}) {
  const apiData = data?.pageBy?.template?.homePage;
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center pb-10">
          <SectionTitle
            title={apiData?.threeStepsMainTitle || "Partner with Anco Turf"}
          />
        </div>
        <div className="flex flex-col md:flex-row items-start gap-5 md:gap-2.5">
          {apiData?.threeSteps?.length > 0 &&
            apiData?.threeSteps
              ?.slice(0, 2)
              ?.map((item: stepDataType, index: number) => (
                <div
                  key={index}
                  className="flex-1 overflow-hidden relative rounded-[20px] group"
                >
                  <Image
                    src={item?.selectStepImage?.node?.mediaItemUrl || ""}
                    width={815}
                    height={815}
                    alt={item?.stepLinkButton?.title || ""}
                    className="min-w-[600px] min-h-[600px] w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-[30px] md:bottom-6 lg:bottom-12 xl:bottom-20 left-[30px] md:left-6 lg:left-12 xl:left-20 text-white flex flex-col items-start gap-5 lg:gap-[30px]">
                    <SectionTitle title={item?.stepLinkButton?.title || ""} />
                    <Link
                      target="_blank"
                      href={item?.stepLinkButton?.url || "#"}
                    >
                      <Button
                        variant="primary"
                        className="border-white! text-white hover:bg-white hover:text-[#5D9732]! min-w-40"
                      >
                        {item?.stepLinkButton?.title || ""}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

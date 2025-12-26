"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

type lawnStepType = {
  selectStepContent: string;
  stepTitle: string;
  stepLinkButton: {
    target: string;
    title: string;
    url: string;
    __typename: string;
  };
  selectStepImage: {
    node: {
      mediaItemUrl: string;
      altText: string;
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
};

function LawnStep({ data }: { data: any }) {
  // const { data, loading, error }: any = useQuery(LAWN4STEPS, {
  //   errorPolicy: "all",
  // });

  // if (data) {
  //   console.log("dataUSPS-->>>", data);
  // }
  // if (loading) return <p>Loading...</p>;
  // console.log("loading", loading);
  // if (error) {
  //   console.log("error--->>>", error);
  //   console.log("error?.errors", error?.errors);
  //   console.log("error?.errors[0]?.message", error?.message);
  // }

  // if (error) return <p className="text-red-600">Error: {error.message}</p>;
  const apiData = data?.pageBy?.homePage;
  return (
    <div className="pt-20 pb-[70px]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <SectionTitle
            title={
              apiData?.threeStepsMainTitle ||
              "Get the perfect lawn in 4 easy steps"
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 md:px-0">
          {apiData?.threeSteps?.length > 0 &&
            apiData?.threeSteps.map((item: lawnStepType, index: number) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[20px]"
              >
                <div>
                  <Image
                    src={item?.selectStepImage?.node?.mediaItemUrl || ""}
                    alt={item?.selectStepImage?.node?.altText || ""}
                    width={395}
                    height={495}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="z-1 absolute top-10 md:top-7 2xl:top-[43px] w-full text-center px-2 text-white text-[35px] md:text-2xl xl:text-3xl 2xl:text-[35px] font-bold leading-none uppercase">
                    {item?.stepTitle.split(" ")[0]}{" "}
                    <span className="font-normal">
                      {item?.stepTitle.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                </div>
                <div className="absolute top-0 left-0 w-full h-[48%] bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]"></div>
                <div className="absolute -bottom-full group-hover:bottom-0 w-full h-[80%] bg-linear-to-t from-[#528917] from-27% to-[#528917]/0 p-2.5 flex flex-col justify-end transition-all duration-500 ease-out">
                  <p className="text-center leading-6 text-white mb-5">
                    {item?.selectStepContent}
                  </p>
                  <Button
                    variant="btnWhite"
                    className="w-full"
                    onClick={() => {
                      item?.stepLinkButton?.url &&
                        window.open(item?.stepLinkButton?.url, "_blank");
                    }}
                  >
                    {item?.stepLinkButton?.title || ""}
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default LawnStep;

import Image from "next/image";

type ancoTurfType = {
  whyAncoTurfIcon: {
    node: {
      altText: string;
      mediaItemUrl: string;
      title: string;
    };
  };
  whyAncoTurfText: string;
  whyAncoTurfTitle: string;
};

export default function Usps({ data }: { data: any }) {
  const apiData = data?.pageBy?.template?.homePage;

  return (
    <div className="bg-[#f6f6f6] py-[30px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center justify-between gap-2 md:gap-4 2xl:gap-5">
          {apiData?.whyAncoTurf?.length > 0 &&
            apiData?.whyAncoTurf?.map((item: ancoTurfType, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2.5 md:gap-3 2xl:gap-5"
              >
                {item?.whyAncoTurfIcon?.node?.mediaItemUrl && (
                  <Image
                    src={item?.whyAncoTurfIcon?.node?.mediaItemUrl || ""}
                    alt={item?.whyAncoTurfIcon?.node?.altText || ""}
                    width={80}
                    height={80}
                    className="w-16 2xl:w-20 aspect-square"
                  />
                )}
                <div>
                  <p className="text-sm font-medium leading-5 tracking-[1.4px] uppercase">
                    {item.whyAncoTurfTitle}
                  </p>
                  <p className="text-sm font-medium leading-5 tracking-[1.4px] uppercase">
                    {item.whyAncoTurfText}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import droughtIcon from "../../public/images/drought-icon.svg";
import shadeIcon from "../../public/images/shade-icon.svg";
import wearIcon from "../../public/images/wear-icon.svg";
import maintenanceIcon from "../../public/images/maintenance-icon.svg";
import leafIcon from "../../public/images/leaf-icon.svg";
import costIcon from "../../public/images/cost-icon.svg";
import tiftufLogo from "../../public/images/tiftuf.svg";
import sirWalterLogo from "../../public/images/sir-walter.svg";
import sirGrangeLogo from "../../public/images/sir-grange.svg";
import Button from "./Button";
import resultProduct1 from "../../public/images/product-turf1.png";
import resultProduct2 from "../../public/images/product-turf2.png";
import resultProduct3 from "../../public/images/product-turf3.png";

const turfProducts = [
  {
    id: 1,
    logo: tiftufLogo,
    name: "Tiftuf Hybrid Bermuda",
    subtitle:
      "Hybrid Bermuda grass forged by the worlds leading \n turf grass scientists.",
    image: resultProduct1,
    features: [
      {
        label: "Drought Resistance",
        value: "Very High",
        icon: droughtIcon,
        width: 24,
        height: 24,
      },
      {
        label: "Shade Tolerance",
        value: "Up To 50%",
        icon: shadeIcon,
        width: 28,
        height: 24,
      },
      {
        label: "Wear",
        value: "Very High",
        icon: wearIcon,
        width: 22,
        height: 26,
      },
      {
        label: "Maintenance",
        value: "Very Low",
        icon: maintenanceIcon,
        width: 24,
        height: 26,
      },
      { label: "Leaf", value: "Fine", icon: leafIcon, width: 16, height: 26 },
      {
        label: "Cost",
        value: "$15.95 Per M²",
        icon: costIcon,
        width: 16,
        height: 26,
      },
    ],
  },
  {
    id: 2,
    logo: sirWalterLogo,
    name: "Sir Walter DNA Certified",
    subtitle:
      "Australia's number 1 buffalo lawn. \n The perfect all-rounder.",
    image: resultProduct2,
    features: [
      {
        label: "Drought Resistance",
        value: "Very High",
        icon: droughtIcon,
        width: 24,
        height: 24,
      },
      {
        label: "Shade Tolerance",
        value: "Up To 50%",
        icon: shadeIcon,
        width: 28,
        height: 24,
      },
      {
        label: "Wear",
        value: "Very High",
        icon: wearIcon,
        width: 22,
        height: 26,
      },
      {
        label: "Maintenance",
        value: "Very Low",
        icon: maintenanceIcon,
        width: 24,
        height: 26,
      },
      { label: "Leaf", value: "Fine", icon: leafIcon, width: 16, height: 26 },
      {
        label: "Cost",
        value: "$13.95 Per M²",
        icon: costIcon,
        width: 16,
        height: 26,
      },
    ],
  },
  {
    id: 3,
    logo: sirGrangeLogo,
    name: "Sir Grange Zoysia",
    subtitle:
      "Stunningly Versatile with Countless \n Possibilities.",
    image: resultProduct3,
    features: [
      {
        label: "Drought Resistance",
        value: "Very High",
        icon: droughtIcon,
        width: 24,
        height: 24,
      },
      {
        label: "Shade Tolerance",
        value: "Up To 50%",
        icon: shadeIcon,
        width: 28,
        height: 24,
      },
      {
        label: "Wear",
        value: "Very High",
        icon: wearIcon,
        width: 22,
        height: 26,
      },
      {
        label: "Maintenance",
        value: "Very Low",
        icon: maintenanceIcon,
        width: 24,
        height: 26,
      },
      { label: "Leaf", value: "Fine", icon: leafIcon, width: 16, height: 26 },
      {
        label: "Cost",
        value: "$22.95 Per M²",
        icon: costIcon,
        width: 16,
        height: 26,
      },
    ],
  },
];

export default function YourResults() {
  return (
    <div className="bg-[#F6F6F6] pt-[60px] pb-10">
      <div className="container mx-auto">
        <div className="relative z-1">
          <div className="bg-[#202020] text-white p-[17px] text-center rounded-full tracking-[1.4px] uppercase font-medium leading-none">
            Your Results
          </div>
          <div className="-z-1 absolute left-1/2 -translate-x-1/2 -bottom-[10px] w-[30px] h-[30px] bg-[url(/images/down-arrow.svg)] bg-cover"></div>
        </div>
        {/* Product Cards */}
        <div className="grid grid-cols-3 gap-[30px] pt-[50px] pb-10">
          {turfProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[20px] p-6 2xl:p-10 2xl:pb-[34px] overflow-hidden"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <Image
                    src={product.logo}
                    alt=""
                    width={246}
                    height={100}
                    className="w-auto h-20 2xl:h-[100px]"
                  />
                  <h3 className="text-xl 2xl:text-[27px] leading-none my-4 2xl:my-5 inline-block">
                    {product.name}
                  </h3>
                </div>
                <div className="flex-none w-24 2xl:w-[122px] aspect-square rounded-full overflow-hidden shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={122}
                    height={122}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-sm 2xl:text-base leading-6 capitalize whitespace-pre-line">{product.subtitle}</p>

              <div className="grid grid-cols-2 gap-x-5 2xl:gap-x-[46px] gap-y-2.5 mt-6 2xl:mt-[30px]">
                {product.features.map((feature, index) => {
                  return (
                    <div key={index} className="flex items-center gap-2 2xl:gap-6 border-b border-[#EDF4EE] 2xl:px-2.5 pb-2.5 nth-last-[1]:border-0 nth-last-[2]:border-0">
                      <div className="w-[28px] text-center flex-none">
                        <Image
                          src={feature.icon}
                          alt="icon"
                          width={feature.width}
                          height={feature.height}
                          className="mx-auto"
                        />
                      </div>
                      <div className="text-sm 2xl:text-base flex-1 text-[#404040] leading-normal">
                        <p className="">
                          {feature.label}
                        </p>
                        <p className="">
                          {feature.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3 2xl:gap-5 mt-5">
                <Button variant="primary" className="flex-1 xl:!px-2 2xl:!py-[22px]">
                  Turf Calculator
                </Button>
                <Button variant="secondary" className="flex-1 xl:!px-2 2xl:!py-[22px]">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" className="2xl:!px-4 2xl:!py-[22px] 2xl:min-w-60">Turf Selection Tool</Button>
        </div>
      </div>
    </div>
  );
}

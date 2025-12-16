import Image from "next/image";
import warrantyIcon from "../../public/images/warranty-icon.svg";
import experienceIcon from "../../public/images/experience-icon.svg";
import promptDeliveryIcon from "../../public/images/prompt-delivery-icon.svg";
import lsaProudIcon from "../../public/images/lsa-proud-icon.svg";
import ausgapIcon from "../../public/images/ausgap-certified-icon.svg";
import downloadAppIcon from "../../public/images/download-app-icon.svg";

const features = [
  {
    icon: warrantyIcon,
    text: ["10 Year", "Warranty*"],
  },
  {
    icon: experienceIcon,
    text: ["45 Year", "Experience"],
  },
  {
    icon: promptDeliveryIcon,
    text: ["Prompt Delivery", "& Service"],
  },
  {
    icon: lsaProudIcon,
    text: ["LSA Proud", "Member"],
  },
  {
    icon: ausgapIcon,
    text: ["AUSGAp", "Certified Turf"],
  },
  {
    icon: downloadAppIcon,
    text: ["Download", "Anco App"],
  },
];


export default function Usps() {
  return (
    <div className="bg-[#f6f6f6] py-[30px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center justify-between gap-2 md:gap-4 2xl:gap-5">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5 md:gap-3 2xl:gap-5">
              <Image
                src={item.icon}
                alt=""
                width={80}
                height={80}
                className="w-16 2xl:w-20 aspect-square"
              />
              {Array.isArray(item.text) ? (
                <div>
                  <p className="text-sm font-medium leading-[20px] tracking-[1.4px] uppercase">{item.text[0]}</p>
                  <p className="text-sm font-medium leading-[20px] tracking-[1.4px] uppercase">{item.text[1]}</p>
                </div>
              ) : (
                <p
                  className={`text-sm font-medium leading-[20px] tracking-[1.4px] uppercase`}
                >
                  {item.text}
                </p>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import shopIcon from "../../public/images/melbourne-icon.svg";

const shopFilters = [
  { label: "Shop All", icon: shopIcon, active: true },
  { label: "Turf", icon: shopIcon },
  { label: "Fertilisers", icon: shopIcon },
  { label: "Seed", icon: shopIcon },
  { label: "Colour Guard", icon: shopIcon },
  { label: "Disease & Pest", icon: shopIcon },
  { label: "Lawn Care Products", icon: shopIcon },
  { label: "Weed Control", icon: shopIcon },
  { label: "Tools & Equipment", icon: shopIcon },
];

export default function ComponentShopFilters() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:flex flex-wrap gap-5 md:gap-[27px]">
        {shopFilters.map((item, index) => (
          <div
            key={index}
            className={`relative ${index === 0 ? "pr-5 md:pr-[27px]" : ""
              }`}
          >
            {index === 0 && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-px bg-[#99C555]" />
            )}
            <button
              key={index}
              className={`w-small-mobile w-[155px] aspect-square rounded-[20px] border border-[#81837F] flex flex-col items-center justify-center gap-5 p-4 transition-all
                ${item.active
                  ? "bg-[#99C555] border-[#5E9831]"
                  : "bg-white hover:bg-[#99C555] hover:border-[#5E9831]"
                }`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={57}
                height={57}
                className={item.active ? "" : ""}
              />
              <span
                className={`text-sm font-medium tracking-[1.4px] uppercase text-center leading-5
                  ${item.active ? "" : "text-[#404040]"
                  }`}
              >
                {item.label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import productCard1 from "../../public/images/product-card-pic1.jpg";
import productCard2 from "../../public/images/product-card-pic2.jpg";
import productCardHover1 from "../../public/images/product-card-pic1-hover.jpg";
import productCardHover2 from "../../public/images/product-card-pic2-hover.jpg";
import Button from "./Button";
import { useState } from "react";

const productCard = [
  {
    image: productCard1,
    imageHover: productCardHover1,
    title: "TifTuf Bermuda Hybrid Couch",
    buttonText: "View Item",
    priceType: "text",
    mPrice: "$15.95",
    unit: "m²",
    totalPrice: "$150.00",
    addToCartBtn: "Add To Cart",
  },
  {
    image: productCard2,
    imageHover: productCardHover2,
    title: "RTF Tall Fescue",
    buttonText: "View Item",
    priceType: "dropdown",
    mPrice: "$15.95",
    unitOptions: ["10 Kg", "20 Kg", "30 Kg"],
    totalPrice: "$150.00",
    addToCartBtn: "Add To Cart",
  },
];

export default function ComponentProductCard() {
  const [values, setValues] = useState<Record<number, number>>({});
  const [selectedUnit, setSelectedUnit] = useState<Record<number, string>>({
    1: "20 Kg",
  });
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {productCard.map((item, index) => (
          <div key={index} className="bg-[#F6F6F6] rounded-[20px]">
            <div className="group relative overflow-hidden rounded-tl-[20px] rounded-tr-[20px] border border-[#F6F6F6]">
              <div className="md:h-[375px] relative overflow-hidden">
                {/* Default Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={395}
                  height={375}
                  className="absolute inset-0 w-full h-full object-cover
                 transition-all duration-500 ease-out
                 group-hover:opacity-0 group-hover:scale-105"
                />

                {/* Hover Image */}
                <Image
                  src={item.imageHover}
                  alt={item.title}
                  width={395}
                  height={375}
                  className="absolute inset-0 w-full h-full object-cover
                 opacity-0 scale-105
                 transition-all duration-500 ease-out
                 group-hover:opacity-100 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-full group-hover:bottom-0 w-full h-[80%] bg-linear-to-t from-[#528917] from-27% to-[#528917]/0 p-2.5 flex flex-col justify-end transition-all duration-500 ease-out">
                <Button variant="btnWhite" className="w-full">
                  {item.buttonText}
                </Button>
              </div>
            </div>

            <div className="p-5 pt-[30px]">
              <h3 className="text-[28px] leading-[30px] min-h-[60px]">
                {item.title}
              </h3>

              {/* PRICE ROW */}
              <div className="mt-[11px] mb-5 flex items-center justify-between font-bold leading-6">
                <div className="text-[#404040]">
                  {item.priceType === "text" && (
                    <span>
                      {item.mPrice} per {item.unit}
                    </span>
                  )}
                  {item.priceType === "dropdown" && (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === index ? null : index
                          )
                        }
                        className="flex items-center gap-2 text-[#404040] font-bold"
                      >
                        {selectedUnit[index]}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform ${openDropdown === index ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M12.0034 16.8006C11.3034 16.8006 10.6034 16.5306 10.0734 16.0006L3.55344 9.48062C3.26344 9.19062 3.26344 8.71062 3.55344 8.42063C3.84344 8.13063 4.32344 8.13063 4.61344 8.42063L11.1334 14.9406C11.6134 15.4206 12.3934 15.4206 12.8734 14.9406L19.3934 8.42063C19.6834 8.13063 20.1634 8.13063 20.4534 8.42063C20.7434 8.71062 20.7434 9.19062 20.4534 9.48062L13.9334 16.0006C13.4034 16.5306 12.7034 16.8006 12.0034 16.8006Z"
                            fill="#5E9831"
                          />
                        </svg>
                      </button>
                      {openDropdown === index && (
                        <div className="absolute left-0 mt-2 w-24 bg-white border border-[#5D9732] rounded-lg shadow-lg z-10 overflow-hidden">
                          {item.unitOptions?.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => {
                                setSelectedUnit((prev) => ({
                                  ...prev,
                                  [index]: opt,
                                }));
                                setOpenDropdown(null);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-[#F6F6F6]"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  Total:
                  <span className="text-[#528917] pl-2">
                    {item.totalPrice}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 xl:gap-3 2xl:gap-5">
                {/* COUNTER + BUTTON */}
                <div className="flex-1 md:flex-none xl:flex-1 border border-[#5D9732] rounded-lg flex items-center justify-between py-[19px] px-[30px] xl:px-4 2xl:px-[30px]">
                  <button
                    onClick={() =>
                      setValues((prev) => ({
                        ...prev,
                        [index]: Math.max(1, (prev[index] ?? 1) - 1),
                      }))
                    }
                    className="text-[#5D9732] text-lg leading-5 font-medium"
                  >
                    -
                  </button>
                  <div className="text-[#5D9732] text-lg font-medium leading-5 flex-1 text-center">
                    {values[index] ?? 1}
                    {item.priceType === "text" && item.unit}
                  </div>
                  <button
                    onClick={() =>
                      setValues((prev) => ({
                        ...prev,
                        [index]: (prev[index] ?? 1) + 1,
                      }))
                    }
                    className="text-[#5D9732] text-lg leading-5 font-medium"
                  >
                    +
                  </button>
                </div>
                <Button
                  variant="secondary"
                  className="flex-1 md:flex-none px-4! 2xl:px-[30px]!"
                >
                  {item.addToCartBtn}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

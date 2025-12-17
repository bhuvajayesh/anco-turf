"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/images/anco-logo.svg";
import SearchIcon from "../../public/images/search-icon.svg";
import UserIcon from "../../public/images/user-circle-icon.svg";
import CartIcon from "../../public/images/cart-icon.svg";
import ToggleIcon from "../../public/images/menu-toggle-icon.svg";
import ToggleCloseIcon from "../../public/images/menu-close-toggle-icon.svg";
import Button from "./Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="bg-[#BBA58F] flex items-center justify-center p-[11px]">
        <p className="text-xs tracking-[2.4px] uppercase text-black font-bold leading-none text-center">
          Sir Walter DNA Certified on sale $13.95 per Sqm, RRP: $15.95
        </p>
      </div>
      <div className="relative bg-white rounded-bl-[70px] px-[30px] md:px-10 py-[19px] border-b border-[#5D9732]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <Image
              src={Logo}
              alt="Logo"
              width={149}
              height={51}
              className="w-auto h-[51px]"
            />
          </div>

          {/* Navigation */}
          <nav
            className={`items-center gap-4 2xl:gap-10 text-sm 2xl:text-[15px] font-bold tracking-[1.5px] uppercase xl:flex xl:transition-none ${isMenuOpen
              ? "flex flex-col items-start fixed top-0 right-0 h-full bg-white border-l border-[#5D9732] py-4 px-6 transition-all duration-300 ease-in-out transform translate-x-0 opacity-100"
              : "hidden xl:opacity-100 xl:translate-x-0 transition-all duration-300 ease-in-out transform translate-x-full opacity-0"
              }`}
          >
            <button
              className="w-5 aspect-square xl:hidden flex items-center justify-center self-end transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src={ToggleCloseIcon} alt="Toggle" width={20} height={20} />
            </button>
            <a href="#" className="hover:text-[#5D9732] transition-colors">
              Turf
            </a>
            <a href="#" className="hover:text-[#5D9732] transition-colors">
              Shop
            </a>
            <a href="#" className="hover:text-[#5D9732] transition-colors">
              Lawn care
            </a>
            <a href="#" className="hover:text-[#5D9732] transition-colors">
              Trade
            </a>
            <a href="#" className="hover:text-[#5D9732] transition-colors">
              Commercial
            </a>
            <a href="#" className="hover:text-[#5D9732] transition-colors">
              Support & Resources
            </a>
            <a href="#" className="hover:text-[#5D9732] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side icons and CTA */}
          <div className="flex items-center gap-4 2xl:gap-5">
            <button className="w-5 aspect-square cursor-pointer">
              <Image src={SearchIcon} alt="Search" width={20} height={20} />
            </button>
            <button className="w-5 aspect-square cursor-pointer">
              <Image src={UserIcon} alt="User" width={20} height={20} />
            </button>
            <button className="w-5 aspect-square cursor-pointer">
              <Image src={CartIcon} alt="Cart" width={20} height={20} />
            </button>
            <Button variant="primary" className="tracking-[0.7px]! py-[18px]! hidden lg:inline-block">
              1800 010 110
            </Button>
            <button
              className="w-5 xl:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image src={ToggleIcon} alt="Toggle" width={20} height={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Logo from "../../public/images/anco-logo.svg";
import SearchIcon from "../../public/images/search-icon.svg";
import UserIcon from "../../public/images/user-circle-icon.svg";
import CartIcon from "../../public/images/cart-icon.svg";
import Button from "./Button";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="bg-[#BBA58F] flex items-center justify-center p-[11px]">
        <p className="text-xs tracking-[2.4px] uppercase text-black font-bold leading-none">
          Sir Walter DNA Certified on sale $13.95 per Sqm, RRP: $15.95
        </p>
      </div>
      <div className="relative bg-white rounded-bl-[70px] px-10 py-[19px] border-b border-[#5D9732]">
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
          <nav className="flex items-center gap-4 2xl:gap-[40px] text-sm 2xl:text-[15px] font-bold tracking-[1.5px] uppercase">
            <a href="#">Turf</a>
            <a href="#">Shop</a>
            <a href="#">Lawn care</a>
            <a href="#">Trade</a>
            <a href="#">Commercial</a>
            <a href="#">Support & Resources</a>
            <a href="#">Contact</a>
          </nav>

          {/* Right side icons and CTA */}
          <div className="flex items-center gap-4 2xl:gap-5">
            <button className="w-[20px] aspect-square cursor-pointer">
              <Image src={SearchIcon} alt="Search" width={20} height={20} />
            </button>
            <button className="w-[20px] aspect-square cursor-pointer">
              <Image src={UserIcon} alt="User" width={20} height={20} />
            </button>
            <button className="w-[20px] aspect-square cursor-pointer">
              <Image src={CartIcon} alt="Cart" width={20} height={20} />
            </button>
            <Button variant="primary" className="!tracking-[0.7px]">
              1800 010 110
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

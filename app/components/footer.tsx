import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/anco-logo.svg";
import SectionTitle from "./SectionTitle";

export default function Footer() {
  return (
    <>
      Footer
      <div className="hidden bg-[#F6F6F6] py-[100px] border-t-[5px] border-t-[#5D9732] rounded-tl-[150px]">
        <div className="container mx-auto">
          <div className="flex items-start gap-[124px]">
            <div className="flex-none min-w-[548px]">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={242} height={83} />
              </Link>
              <div className="mt-[66px]">
                <SectionTitle title="Sign Up To Our Newsletter" />
              </div>
            </div>
            <div className="flex-1">Footer Right Content</div>
          </div>
        </div>
      </div>
    </>
  );
}

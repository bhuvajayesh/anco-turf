import Link from "next/link";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

interface PromoBannerProps {
  bgImage: string;
  productImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const PromoBanner = ({
  bgImage,
  productImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: PromoBannerProps) => {
  return (
    <div
      className="w-full bg-contain md:bg-cover md:bg-center py-20 md:py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 lg:gap-10">
        <div className="bg-white p-2.5 rounded-[20px] w-[200px] aspect-square">
          <img
            src={productImage}
            alt="Product"
            width={180}
            height={180}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center text-[#99C555] font-black uppercase tracking-[0.7px] text-center">
          <SectionTitle title={title} />
          <p className="text-4xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal text-white leading-none">{subtitle}</p>
        </div>
        <Link href={buttonLink}>
          <Button variant="secondary" className="!tracking-[1.4px] !bg-[#99C555] !text-[#202020] hover:!bg-white min-w-[207px] md:min-w-40 xl:min-w-[207px]">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div >
  );
};

export default PromoBanner;

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import tradeCustomer from "../../public/images/trade-customer.jpg";
import commercialCap from "../../public/images/commercial-capabilities.jpg";
import Button from "./Button";
import Link from "next/link";

const partnerItems = [
    {
        id: 1,
        image: tradeCustomer,
        title: "Trade Customer",
        buttonText: "Sign Up",
        buttonLink: "/signup",
    },
    {
        id: 2,
        image: commercialCap,
        title: "Commercial capabilities",
        buttonText: "Contact Us",
        buttonLink: "/contact",
    },
];


export default function PartnerSplitHero() {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="text-center pb-10">
                    <SectionTitle title="Partner with Anco Turf" />
                </div>
                <div className="flex items-start gap-2.5">
                    {partnerItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex-1 overflow-hidden relative rounded-[20px] group"
                        >
                            <Image
                                src={item.image}
                                width={815}
                                height={815}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-20 left-20 text-white flex flex-col items-start gap-[30px]">
                                <SectionTitle title={item.title} />
                                <Link href={item.buttonLink}>
                                    <Button
                                        variant="primary"
                                        className="!border-white text-white hover:bg-white hover:!text-[#5D9732] !py-[22px] min-w-40"
                                    >
                                        {item.buttonText}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

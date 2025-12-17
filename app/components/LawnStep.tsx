import Image from "next/image";
import SectionTitle from "./SectionTitle";
import stepsImage1 from "../../public/images/choose-turf.jpg";
import stepsImage2 from "../../public/images/measure-lawn.jpg";
import stepsImage3 from "../../public/images/order-turf.jpg";
import stepsImage4 from "../../public/images/lay-turf.jpg";
import Button from "./Button";

const turfSteps = [
  {
    image: stepsImage1,
    title: "Choose Turf",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and industry.",
    buttonText: "Turf Recommendation",
  },
  {
    image: stepsImage2,
    title: "Measure Lawn",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and industry.",
    buttonText: "Use Calculator",
  },
  {
    image: stepsImage3,
    title: "Order Turf",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and industry.",
    buttonText: "Order NOW",
  },
  {
    image: stepsImage4,
    title: "Lay Turf",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and industry.",
    buttonText: "Learn how",
  },
];

export default function LawnStep() {
  return (
    <div className="pt-20 pb-[70px]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <SectionTitle title="Get the perfect lawn in 4 easy steps" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 md:px-0">
          {turfSteps.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[20px]"
            >
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={395}
                  height={495}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="absolute top-10 md:top-7 2xl:top-[43px] w-full text-center px-2 text-white text-[35px] md:text-2xl xl:text-3xl 2xl:text-[35px] font-bold leading-none uppercase">
                  {item.title.split(" ")[0]}{" "}
                  <span className="font-normal">
                    {item.title.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
              </div>
              <div className="absolute -bottom-full group-hover:bottom-0 w-full h-[80%] bg-linear-to-t from-[#528917] from-27% to-[#528917]/0 p-2.5 flex flex-col justify-end transition-all duration-500 ease-out">
                <p className="text-center leading-6 text-white mb-5">
                  {item.subtitle}
                </p>
                <Button variant="btnWhite" className="w-full">
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

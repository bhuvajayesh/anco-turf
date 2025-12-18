import Image from "next/image";
import SectionTitle from "./SectionTitle";
import cardPic1 from "../../public/images/market-leader.jpg";
import cardPic2 from "../../public/images/quick-turn-around.jpg";
import cardPic3 from "../../public/images/trade-prices.jpg";
import cardPic4 from "../../public/images/experience.png";
import ancoEstablishedLogo from "../../public/images/anco-established-logo.png";
import councilParks from "../../public/images/council-parks.jpg";
import Button from "./Button";
import establishingNewLawn from "../../public/images/establishing-new-lawn.jpg";
import lawnFertiliser from "../../public/images/lawn-fertiliser.png";

const turfSteps = [
  {
    image: cardPic1,
    title: "Market Leader",
    content: (
      <>
        <p className="mb-4">
          We are the biggest in the industry and supply all businesses big and
          small including Flemington Race Track.
        </p>
        <p>
          Our turf range is made up of the best varieties of each species
          suitable for Melbourne Lawns, Sportsturf, Parks and revegetation
          projects.
        </p>
      </>
    ),
  },
  {
    image: cardPic2,
    title: "Quick Turn Around",
    content: (
      <>
        <p className="mb-4">
          Anco Trade Customers receive deliveries within the first half of the
          day, unless unusual circumstances prevail. And also have access to
          earlier dates when ordering online or via our app.
        </p>
        <p>
          Your delivery driver will send an SMS the day prior to your delivery
          date with a 2 hour estimated time of delivery so that you can plan
          your day. If you sign up to our app here, you can also track your turf
          delivery.
        </p>
      </>
    ),
  },
  {
    image: cardPic3,
    title: "Trade Prices",
    content: (
      <>
        <p className="mb-4">
          Anco Trade customers receive a special Trade price on Turf varieties
          including Sir Walter DNA Certified.
        </p>
        <p>
          Our expert turf advisory staff are available to assist with your lawn
          and turf specifications.
        </p>
      </>
    ),
  },
  {
    image: cardPic4,
    title: "45+ Yrs' Experience",
    logo: ancoEstablishedLogo,
    content: (
      <>
        <p className="mb-4">
          Over forty-five years experience in dealing with the trade ensures a
          smooth process from ordering through to the turf delivery.
        </p>
        <p>
          Products & an after sales advisory service is available for turf
          maintenance and management.
        </p>
      </>
    ),
  },
];

const card1by4 = [
  {
    image: councilParks,
    title: "COUNCIL & PARKS",
    content: "Keep your council and parks looking their best with premium grass varieties..",
    buttonText: "Read More",
  },
];

const card1by3 = [
  {
    image: establishingNewLawn,
    title: "Establishing New Lawn",
    content: "Get stunning instant lawns with the best advice on lawn types, and lawn maintenance tips for maximum grass growth.",
    buttonText: "LEARN MORE",
  },
  {
    image: lawnFertiliser,
    title: "What is Lawn Fertiliser?",
    content: "Lawn fertiliser is a specifically formulated carrier of essential nutrients required for healthy grass growth. It comes in an array of formulations and release methods designed for specific grasses, application methods and seasonal timing.",
    buttonText: "Choosing The Right Turf",
  },
];

export default function ComponentHoverCards() {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-10">
        <SectionTitle title="Hover Cards" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-2 md:px-0">
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
                className="w-full h-[495px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="z-1 absolute top-10 w-full text-center px-2 text-white text-[35px] md:text-2xl xl:text-3xl 2xl:text-[35px] font-bold leading-none uppercase">
                {item.title.split(" ")[0]}{" "}
                <span className="font-light">
                  {item.title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
            </div>
            <div className="absolute top-0 left-0 w-full h-[48%] bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]"></div>
            <div className="absolute -bottom-full group-hover:bottom-0 w-full h-full bg-[linear-gradient(0deg,#3D7303_35%,rgba(61,115,3,0)_100%)] p-5 flex flex-col justify-end transition-all duration-500 ease-out">
              {item.logo && (
                <div className="mb-2 md:mb-4 text-center">
                  <Image
                    src={item.logo}
                    alt="Anco Established"
                    width={300}
                    height={141}
                    className="max-w-full h-32 md:h-auto rounded-lg mx-auto"
                  />
                </div>
              )}
              <div className="text-center leading-6 text-white mb-5">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-2 md:px-0">
        {card1by4.map((item, index) => (
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
                className="w-full h-[495px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="z-1 absolute top-10 w-full text-center px-2 text-white text-[35px] md:text-2xl xl:text-3xl 2xl:text-[35px] font-bold leading-none uppercase">
                {item.title.split(" ")[0]}{" "}
                <span className="font-light">
                  {item.title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
            </div>
            <div className="absolute top-0 left-0 w-full h-[48%] bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]"></div>
            <div className="absolute -bottom-full group-hover:bottom-0 w-full h-full bg-[linear-gradient(0deg,#3D7303_35%,rgba(61,115,3,0)_100%)] p-2.5 flex flex-col justify-end transition-all duration-500 ease-out">
              <p className="text-center leading-6 text-white mb-5">
                {item.content}
              </p>
              <Button variant="btnWhite" className="w-full">
                {item.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-2 md:px-0">
        {card1by3.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[20px]"
          >
            <div className="aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                width={533}
                height={533}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="z-1 absolute top-11 w-full text-center px-2 text-white text-[27px] font-bold leading-none uppercase">
                {item.title}
              </h3>
            </div>
            <div className="absolute top-0 left-0 w-full h-[48%] bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]"></div>
            <div className="absolute -bottom-full group-hover:bottom-0 w-full h-full bg-[linear-gradient(0deg,#3D7303_35%,rgba(61,115,3,0)_100%)] p-5 flex flex-col justify-end transition-all duration-500 ease-out">
              <p className="text-center leading-6 text-white mb-5">
                {item.content}
              </p>
              <Button variant="btnWhite" className="w-full">
                {item.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

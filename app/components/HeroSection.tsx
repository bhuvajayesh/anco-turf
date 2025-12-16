import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden h-screen 2xl:h-[994px] mt-[-125px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/banner-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/0"></div>
      <div className="container mx-auto h-full flex items-end relative">
        <div className="relative bottom-[60px] md:bottom-48 2xl:bottom-[291px] pl-2 pr-1 md:px-0">
          <p className="text-lg font-medium tracking-[1.2px] uppercase text-white">
            Premium Turf
          </p>
          <h1 className="text-4xl font-medium leading-[1.1] tracking-[0px] uppercase text-white my-2.5">
            PERFECT LAWNS
          </h1>
          <p className="text-lg font-medium leading-[1.5] text-white">
            Designed To Thrive in Australian Conditions.
          </p>
          <div className="flex gap-2.5 mt-10">
            <Button
              variant="primary"
              className="border border-white text-white"
            >
              Get started
            </Button>
            <Button
              variant="primary"
              className="border border-white text-white"
            >
              Lawn Varieties
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

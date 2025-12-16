import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import playIcon from "../../public/images/play-icon.svg";
import sliderArrowPrev from "../../public/images/slider-arrow-left.svg";
import sliderArrowNext from "../../public/images/slider-arrow-right.svg";
import videoThumbnail from "../../public/images/video-thumbnail.jpg";
import sliderThumbnail1 from "../../public/images/life-thumbnail1.jpg";
import sliderThumbnail2 from "../../public/images/life-thumbnail2.jpg";
import sliderThumbnail3 from "../../public/images/life-thumbnail3.jpg";
import SectionTitle from "./SectionTitle";

interface MediaItem {
  id: number;
  type: "image" | "video";
  url: string;
  thumbnail?: string | StaticImageData;
  title: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "video",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: sliderThumbnail1.src,
    title: "The Mowing Express- A Complete Guide To Lawn Mowing",
  },
  {
    id: 2,
    type: "video",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: sliderThumbnail2.src,
    title: "Here's To 100 Million Metres Of Sir Walter! - Anco Turf",
  },
  {
    id: 3,
    type: "image",
    url: sliderThumbnail3.src,
    title: "How To Stop Birds Ripping Up Your Lawn - Anco Turf",
  },
];

export default function ReadyForLife() {
  const [selectedMediaId, setSelectedMediaId] = useState<number>(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const selectedMedia =
    mediaItems.find((item) => item.id === selectedMediaId) || mediaItems[0];

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const handleMediaClick = (id: number) => {
    setSelectedMediaId(id);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
        setIsPlaying(false);
      } else {
        videoRef.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setVisibleCount(2.75); // desktop
      } else if (width >= 768) {
        setVisibleCount(2.5); // tablet
      } else {
        setVisibleCount(1); // mobile
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Reset playing state when media changes
  useEffect(() => {
    setIsPlaying(false);
  }, [selectedMediaId]);

  // Get visible items with partial visibility for 2.5 items effect
  const getVisibleItems = () => {
    const visible = [];
    // Show 4 items to create the 2.5 effect (2 full + 0.5 partial)
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % mediaItems.length;
      visible.push(mediaItems[index]);
    }
    return visible;
  };

  const visibleItems = getVisibleItems();

  return (
    <>
      <section className="bg-[#F6F6F6]">
        <div className="text-center py-10 px-2 md:px-4 md:pt-[41px] md:pb-[34px]">
          <SectionTitle title="Engineered for Perfection. Ready for Life." />
        </div>
        {/* Main Media Display Section */}
        <div className="relative h-60 md:h-[600px] xl:h-[700] 2xl:h-[940px] overflow-hidden">
          {selectedMedia.type === "image" ? (
            <>
              {/* Background Image */}
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="absolute inset-0 w-full h-full object-cover"
                key={selectedMedia.id}
              />
            </>
          ) : (
            <>
              {/* Video Element without native controls */}
              <video
                src={selectedMedia.url}
                poster={
                  typeof selectedMedia.thumbnail === "string"
                    ? selectedMedia.thumbnail
                    : selectedMedia.url
                }
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                key={selectedMedia.id}
                ref={setVideoRef}
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>

              {/* Custom Center Play Button */}
              {!isPlaying && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause();
                  }}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="w-[100px] md:w-20 2xl:w-[100px] aspect-square flex items-center justify-center">
                    <Image
                      src={playIcon}
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              )}
            </>
          )}
        </div>
        {/* Carousel Section */}
        <div className="pt-5 pb-10 px-[46px] md:pt-5 md:pb-[140px] md:pl-28 xl:pl-[140px] overflow-hidden">
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={isTransitioning}
              className="absolute -left-9 md:-left-7 2xl:left-[-35px] top-[52px] md:top-1/2 md:-translate-y-1/2 w-[70px] md:w-14 2xl:w-[70px] aspect-square z-1 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
              aria-label="Previous items"
            >
              <Image src={sliderArrowPrev} alt="Prev" width={70} height={70} className="w-full h-full" />
            </button>

            {/* Media Items Container */}
            <div className="relative mx-auto">
              <div
                className="flex gap-5 transition-transform duration-300 ease-in-out"
              // style={{
              //   transform: `translateX(-${(currentIndex * 100) / 2.5}%)`,
              // }}
              >
                {visibleItems.map((item, index) => {
                  const isSelected = item.id === selectedMediaId;
                  const displayImage =
                    item.type === "video"
                      ? typeof item.thumbnail === "string"
                        ? item.thumbnail
                        : ""
                      : item.url;

                  return (
                    <div
                      key={`${item.id}-${currentIndex}-${index}`}
                      className="flex-shrink-0 relative"
                      style={{
                        width: `${100 / visibleCount}%`,
                      }}
                    >
                      <button
                        onClick={() => handleMediaClick(item.id)}
                        className="group cursor-pointer text-center w-full"
                        style={{
                          animation: isTransitioning
                            ? "fadeIn 0.3s ease-in-out"
                            : "none",
                        }}
                      >
                        {/* Media Thumbnail */}
                        <div
                          className={`relative overflow-hidden rounded-[20px] w-full h-[174px] md:h-auto aspect-[16/9] transition-all ${isSelected
                            ? ""
                            : ""
                            }`}
                        // ? "ring-4 ring-[#5d9732] shadow-lg"
                        // : "shadow-sm hover:shadow-md"
                        // }`}
                        >
                          <img
                            src={displayImage}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          {/* Video Play Icon Overlay */}
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="h-[70px] md:h-14 2xl:h-[70px] aspect-square rounded-full">
                                <Image src={playIcon} alt="" width={70} height={70} className="w-full h-full" />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Media Title */}
                        <h3 className="text-[21px] lg:text-lg 2xl:text-[21px] mt-5 2xl:mt-[30px] leading-8 md:absolute w-full text-center">
                          {item.title}
                        </h3>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="absolute -right-9 md:right-20 2xl:right-[105px] top-[52px] md:top-1/2 md:-translate-y-1/2 w-[70px] md:w-14 2xl:w-[70px] aspect-square z-1 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
              aria-label="Next items"
            >
              <Image src={sliderArrowNext} alt="Next" width={70} height={70} className="w-full h-full" />
            </button>
          </div>
        </div>
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>


    </>
  );
}

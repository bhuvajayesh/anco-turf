"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState, useEffect, useMemo } from "react";
import playIcon from "../../public/images/play-icon.svg";
import sliderArrowPrev from "../../public/images/slider-arrow-left.svg";
import sliderArrowNext from "../../public/images/slider-arrow-right.svg";
import SectionTitle from "./SectionTitle";
import { VideoSliderDataType } from "../types/types";

interface MediaItem {
  id: number;
  type: "image" | "video";
  url: string;
  thumbnail?: string | StaticImageData;
  title: string;
}

export default function ReadyForLife({ data }: { data: VideoSliderDataType }) {
  const apiData = data?.pageBy?.videoSlider;

  const [selectedMediaId, setSelectedMediaId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  // console.log("VIDEO_SLIDER_DATA-->>", apiData);

  const mediaItems: MediaItem[] = useMemo(() => {
    if (!apiData?.videos?.length) return [];

    return apiData.videos.map((video, index) => ({
      id: index + 1,
      type: "video",
      url: video.videoUrl,
      thumbnail: video.videoImage?.node?.mediaItemUrl || "",
      title: video.videoTitle,
    }));
  }, [apiData]);

  useEffect(() => {
    if (mediaItems.length && selectedMediaId === null) {
      setSelectedMediaId(mediaItems[0].id);
    }
  }, [mediaItems, selectedMediaId]);

  const selectedMedia =
    mediaItems.find((item) => item.id === selectedMediaId) || mediaItems[0];

  /* ===================== CAROUSEL HELPERS ===================== */
  const visibleItems = useMemo(() => {
    if (!mediaItems.length) return [];

    const items: MediaItem[] = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % mediaItems.length;
      items.push(mediaItems[index]);
    }
    return items;
  }, [currentIndex, mediaItems]);

  const handlePrevious = () => {
    if (isTransitioning || !mediaItems.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning || !mediaItems.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const handleMediaClick = (id: number) => {
    setSelectedMediaId(id);
    setIsPlaying(false);
  };

  /* ===================== VIDEO CONTROLS ===================== */

  const handlePlayPause = () => {
    if (!videoRef) return;

    if (isPlaying) {
      videoRef.pause();
    } else {
      videoRef.play();
    }
  };

  /* ===================== EFFECTS ===================== */

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(2.75);
      else if (width >= 768) setVisibleCount(2.5);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    setIsPlaying(false);
  }, [selectedMediaId]);

  if (!mediaItems.length) return null;

  return (
    <>
      <section className="bg-[#F6F6F6]">
        <div className="text-center py-10 px-2 md:px-4 md:pt-[41px] md:pb-[34px]">
          <SectionTitle title={apiData?.videosectionTitle || ""} />
        </div>
        {/* Main Media Display Section */}
        <div className="relative h-60 md:h-[600px] xl:h-[700] 2xl:h-[940px] overflow-hidden">
          <div>
            {/* Video Element without native controls */}
            <video
              src={selectedMedia.url}
              poster={
                typeof selectedMedia.thumbnail === "string"
                  ? selectedMedia.thumbnail
                  : selectedMedia.url
              }
              key={selectedMedia.id}
              ref={setVideoRef}
              onClick={handlePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            >
              Your browser does not support the video tag.
            </video>

            {/* Custom Center Play Button */}
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
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
          </div>
        </div>
        {/* Carousel Section */}
        <div className="pt-5 pb-10 md:pt-5 md:pb-[140px] md:pl-28 xl:pl-[140px] overflow-hidden">
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={isTransitioning}
              className="absolute left-2.5 md:-left-7 2xl:left-[-35px] top-[52px] md:top-1/2 md:-translate-y-1/2 w-[70px] md:w-14 2xl:w-[70px] aspect-square z-1 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
              aria-label="Previous items"
            >
              <Image
                src={sliderArrowPrev}
                alt="Prev"
                width={70}
                height={70}
                className="w-full h-full"
              />
            </button>

            {/* Media Items Container */}
            <div className="relative mx-auto w-[calc(100%-92px)] overflow-hidden md:w-full md:overflow-visible">
              <div className="flex gap-5 transition-transform duration-300 ease-in-out">
                {visibleItems?.map((item, index) => {
                  // const isSelected = item.id === selectedMediaId;
                  // const displayImage =
                  //   item.type === "video"
                  //     ? typeof item.thumbnail === "string"
                  //       ? item.thumbnail
                  //       : ""
                  //     : item.url;

                  return (
                    <div
                      key={`${item.id}-${index}`}
                      style={{
                        width: `${100 / visibleCount}%`,
                      }}
                      className="shrink-0 relative"
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
                          className={`relative overflow-hidden rounded-[20px] w-full h-[174px] md:h-auto aspect-video transition-all`}
                        >
                          <img
                            src={item.thumbnail as string}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          {/* Video Play Icon Overlay */}
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="h-[70px] md:h-14 2xl:h-[70px] aspect-square rounded-full">
                                <Image
                                  src={playIcon}
                                  alt=""
                                  width={70}
                                  height={70}
                                  className="w-full h-full"
                                />
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
              className="absolute right-2.5 md:right-20 2xl:right-[105px] top-[52px] md:top-1/2 md:-translate-y-1/2 w-[70px] md:w-14 2xl:w-[70px] aspect-square z-1 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
              aria-label="Next items"
            >
              <Image
                src={sliderArrowNext}
                alt="Next"
                width={70}
                height={70}
                className="w-full h-full"
              />
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

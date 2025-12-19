"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ProjectImageCardProps = {
  image: StaticImageData;
  title: string;
};

export default function ProjectImageCard({
  image,
  title,
}: ProjectImageCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-2 md:px-0">
        <div className="relative w-full aspect-square rounded-[20px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="absolute top-5 right-5 w-8 h-8"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M17.5 23.9V17.5M17.5 11.1H17.516M33.5 17.5C33.5 26.3366 26.3366 33.5 17.5 33.5C8.66344 33.5 1.5 26.3366 1.5 17.5C1.5 8.66344 8.66344 1.5 17.5 1.5C26.3366 1.5 33.5 8.66344 33.5 17.5Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Overlay */}
          {open && (
            <>
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 w-8 h-8"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M17.5 33.5C26.3366 33.5 33.5 26.3366 33.5 17.5C33.5 8.66344 26.3366 1.5 17.5 1.5C8.66344 1.5 1.5 8.66344 1.5 17.5C1.5 26.3366 8.66344 33.5 17.5 33.5Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9 24.5L10.5 23.1L16.1 17.5L10.5 11.9L11.9 10.5L17.5 16.1L23.1 10.5L24.5 11.9L18.9 17.5L24.5 23.1L23.1 24.5L17.5 18.9L11.9 24.5Z"
                    fill="white"
                    stroke="white"
                  />
                </svg>
              </button>

              {/* Title box */}
              <div className="absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[10px] w-full text-center shadow-lg px-5">
                <svg
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[25px] top-[-9px]"
                >
                  <path
                    d="M8.66406 0L17.3243 9H0.00380802L8.66406 0Z"
                    fill="white"
                  />
                </svg>
                <div className="bg-white py-2.5 px-2.5 lg:px-10">
                  <p className="leading-6">{title}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

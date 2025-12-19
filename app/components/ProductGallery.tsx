"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageGalleryProps = {
    images: StaticImageData[];
    badge?: StaticImageData;
};

export default function ProductGallery({ images, badge }: ImageGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="container max-w-[945px]! mx-auto">
            <div className="w-full">
                {/* MAIN IMAGE */}
                <div className="relative aspect-square rounded-[20px] overflow-hidden">
                    <Image
                        src={images[activeIndex]}
                        alt="Gallery Image"
                        className="w-full h-full object-cover"
                        priority
                    />

                    {/* Badge / Logo */}
                    {badge && (
                        <div className="absolute top-5 right-5 bg-white rounded-lg px-4 py-1.5">
                            <Image src={badge} alt="Badge" width={167} height={68} />
                        </div>
                    )}
                </div>

                {/* THUMBNAILS */}
                <div className="mt-2.5 md:mt-5 grid grid-cols-5 gap-2 md:gap-5">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`rounded-lg md:rounded-[20px] aspect-square overflow-hidden transition ${activeIndex === index ? "" : "opacity-80 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

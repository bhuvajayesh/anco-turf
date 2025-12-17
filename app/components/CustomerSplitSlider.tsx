import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import sliderArrowPrev from "../../public/images/slider-arrow-left.svg";
import sliderArrowNext from "../../public/images/slider-arrow-right.svg";
import facebookIcon from "../../public/images/facebook-icon.svg";
import googleIcon from "../../public/images/gpay-icon.svg";

/** Right-side testimonial item */
type Review = {
    id: number;
    providerIcon?: string; // optional icon (facebook/google)
    name: string;
    text: string;
    rating?: number;
    link?: string;
};

const REVIEWS: Review[] = [
    {
        id: 1,
        providerIcon: "/images/gpay-icon.svg",
        name: "Charles Redden",
        text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
        rating: 5,
    },
    {
        id: 2,
        providerIcon: "/images/facebook-icon.svg",
        name: "Charles Redden",
        text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
        rating: 5,
    },
    {
        id: 3,
        providerIcon: "/images/gpay-icon.svg",
        name: "Charles Redden",
        text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
        rating: 5,
    },
    {
        id: 4,
        providerIcon: "/images/facebook-icon.svg",
        name: "Charles Redden",
        text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
        rating: 5,
    },
];

export default function CustomerSplitSlider() {
    // responsive visible count: 1 on small screens, 3 on md+
    const [visibleCount, setVisibleCount] = useState<number>(3);

    useEffect(() => {
        const updateCount = () => {
            const width = window.innerWidth;

            if (width >= 1024) {
                setVisibleCount(3); // desktop
            } else if (width >= 768) {
                setVisibleCount(2); // small screens / tablet
            } else {
                setVisibleCount(1); // mobile
            }
        };

        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);

    const items = useMemo(() => REVIEWS, []);
    const itemCount = items.length;

    // index of left-most visible item in right-slider
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const maxIndex = Math.max(0, itemCount - visibleCount);
        if (index > maxIndex) setIndex(maxIndex);
    }, [visibleCount, itemCount, index]);

    const prev = () => setIndex((i) => Math.max(0, i - 1));
    const next = () =>
        setIndex((i) => Math.min(i + 1, Math.max(0, itemCount - visibleCount)));

    // track math: each right-side item occupies (100 / visibleCount)% of the right viewport
    const itemWidthPct = 100 / visibleCount;
    const trackWidthPct = itemCount * itemWidthPct;
    const translateX = -(index * itemWidthPct);

    const trackRef = useRef<HTMLDivElement | null>(null);

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <SectionTitle title="Our Customers" />
                </div>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-stretch px-2 md:px-0">
                    {/* Left fixed summary card */}
                    <div className="md:min-w-[200px] lg:min-w-auto lg:w-[24.65%] rounded-[20px] bg-[#5D9732] text-white p-4 xl:p-6 2xl:px-10 2xl:py-8 flex flex-col justify-between gap-3 2xl:gap-5">
                        {/* Facebook block */}
                        <div className="flex flex-col items-center gap-2.5">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <Image
                                    src={facebookIcon}
                                    alt="facebook"
                                    width={12}
                                    height={22}
                                />
                            </div>
                            <div className="text-center">
                                <div className="leading-none">Facebook Reviews</div>
                                <div className="mt-1.5 mb-2.5 flex items-center justify-center gap-1.5">
                                    <Stars count={4} half />
                                </div>
                                <div className="leading-none">
                                    <strong>4.3</strong> From <u>163 Reviews</u>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/30 w-full" />

                        {/* Google block */}
                        <div className="flex flex-col items-center gap-2.5">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <Image src={googleIcon} alt="google" width={30} height={30} />
                            </div>
                            <div className="text-center">
                                <div className="leading-none">Google Reviews</div>
                                <div className="mt-1.5 mb-2.5 flex items-center justify-center gap-1.5">
                                    <Stars count={4} half />
                                </div>
                                <div className="leading-none">
                                    <strong>4.3</strong> From <u>163 Reviews</u>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative md:pl-2.5">
                        <button
                            onClick={prev}
                            aria-label="Previous reviews"
                            className="absolute -left-2 lg:-left-4 2xl:-left-[35px] top-1/2 -translate-y-1/2 w-14 h-14 2xl:w-[70px] 2xl:h-[70px] z-1 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                        >
                            <Image
                                src={sliderArrowPrev}
                                alt="Prev"
                                width={70}
                                height={70}
                                className="w-full h-full"
                            />
                        </button>

                        <div className="overflow-hidden h-full">
                            <div
                                ref={trackRef}
                                className="flex h-full transition-transform duration-500 ease-in-out items-stretch"
                                style={{
                                    transform: `translateX(${translateX}%)`,
                                }}
                            >
                                {items.map((it) => (
                                    <div
                                        key={it.id}
                                        className="shrink-0 md:px-2.5"
                                        style={{
                                            width: `${100 / visibleCount}%`,
                                        }}
                                    >
                                        <article className="relative rounded-[20px] bg-[#F6F6F6] h-full py-[30px] px-[66px] md:p-4 xl:p-6 2xl:px-11 2xl:py-[30px] flex flex-col items-center text-center">
                                            <div className="w-[72px] aspect-square rounded-full bg-white flex items-center justify-center">
                                                <Image
                                                    src={it.providerIcon ?? ""}
                                                    alt={it.name}
                                                    width={21}
                                                    height={40}
                                                    className="w-auto h-10"
                                                />
                                            </div>
                                            <h4 className="font-bold text-[21px] py-5 md:my-3 2xl:my-5">{it.name}</h4>
                                            <p className="md:text-sm 2xl:text-base text-[#404040] leading-6 mb-5">{it.text}</p>

                                            <div className="mt-auto">
                                                <Stars count={it.rating ?? 5} />
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={next}
                            aria-label="Next reviews"
                            className="absolute -right-2 lg:-right-4 2xl:-right-[35px] top-1/2 -translate-y-1/2 h-14 2xl:w-[70px] 2xl:h-[70px] z-1 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
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
            </div>
        </section>
    );
}

/* ---------- small helper Stars component ---------- */
function Stars({
    count = 5,
    half = false,
}: {
    count?: number;
    half?: boolean;
}) {
    // simple stars display, half will show a half-star visually approximated
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 .587l3.668 7.572L24 9.748l-6 5.857 1.416 8.262L12 19.771 4.584 23.867 6 15.605 0 9.748l8.332-1.589z" />
                </svg>
            ))}
            {half && (
                <svg
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <defs>
                        <linearGradient id="halfGrad">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#E5E7EB" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#halfGrad)"
                        d="M12 .587l3.668 7.572L24 9.748l-6 5.857 1.416 8.262L12 19.771 4.584 23.867 6 15.605 0 9.748l8.332-1.589z"
                    />
                </svg>
            )}
        </div>
    );
}

// components/BlogSlider.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sliderArrowPrev from "../../public/images/slider-arrow-left.svg";
import sliderArrowNext from "../../public/images/slider-arrow-right.svg";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

/** Slide item type */
type BlogItem = {
    id: number;
    title: string;
    image: string; // path or url
    link?: string;
};

const ITEMS: BlogItem[] = [
    {
        id: 1,
        title: "Anco Turf Moves To New Head Office",
        image: "/images/blog1.jpg",
        link: "/blog/anco-moves-head-office",
    },
    {
        id: 2,
        title: "From Sunlight To Shade: We Help You To Decide",
        image: "/images/blog2.jpg",
        link: "/blog/sunlight-to-shade",
    },
    {
        id: 3,
        title: "Anco Turf Moves To New Head Office",
        image: "/images/blog1.jpg",
        link: "/blog/anco-moves-head-office",
    },
];

export default function BlogSlider() {
    // responsive visible count: 1 on small screens, 2 on medium+
    const [visibleCount, setVisibleCount] = useState<number>(2);
    useEffect(() => {
        const mq = (q: string) => window.matchMedia(q);
        const setCount = () => {
            // breakpoint at 768px (md)
            const isMd = mq("(min-width: 768px)").matches;
            setVisibleCount(isMd ? 2 : 1);
        };
        setCount();
        const mdMq = mq("(min-width: 768px)");
        mdMq.addEventListener("change", setCount);
        return () => mdMq.removeEventListener("change", setCount);
    }, []);

    const items = useMemo(() => ITEMS, []);
    const itemCount = items.length;

    // index of left-most visible item (0-based)
    const [index, setIndex] = useState(0);

    // ensure index within bounds when visibleCount changes
    useEffect(() => {
        if (index > Math.max(0, itemCount - visibleCount)) {
            setIndex(Math.max(0, itemCount - visibleCount));
        }
    }, [visibleCount, itemCount, index]);

    const prev = () => {
        setIndex((i) => Math.max(0, i - 1));
    };
    const next = () => {
        setIndex((i) => Math.min(itemCount - visibleCount, i + 1));
    };

    // track width and translate calculation
    const itemWidthPct = 100 / visibleCount; // e.g. 50% for visibleCount=2
    const trackWidthPct = itemCount * itemWidthPct;
    const translateX = -(index * itemWidthPct);

    // keyboard arrows
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [itemCount, visibleCount]);

    const trackRef = useRef<HTMLDivElement | null>(null);

    return (
        <section className="bg-[#F6F6F6] py-20">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <SectionTitle title="Lawn Advice Blogs" />
                </div>

                <div className="relative">
                    {/* Prev button */}
                    <button
                        onClick={prev}
                        aria-label="Previous"
                        className="absolute -left-4 2xl:-left-5 top-1/2 -translate-y-1/2 w-14 h-14 2xl:w-[70px] 2xl:h-[70px] z-1 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                    >
                        <Image src={sliderArrowPrev} alt="Prev" width={70} height={70} className="w-full h-full" />
                    </button>

                    {/* Slider viewport */}
                    <div className="overflow-hidden">
                        <div
                            ref={trackRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(${translateX}%)`,
                            }}
                        >
                            {items.map((it) => (
                                <div
                                    key={it.id}
                                    className="flex-shrink-0 px-2.5 aspect-square"
                                    style={{
                                        width: `${100 / 2}%`,
                                    }}
                                >
                                    <article className="relative rounded-[20px] overflow-hidden w-full h-full group">
                                        <Image
                                            src={it.image}
                                            alt={it.title}
                                            width={820}
                                            height={820}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute -bottom-full group-hover:bottom-0 w-full h-[40%] bg-gradient-to-t from-[#528917] from-27% to-[#528917]/0 p-2.5 flex flex-col justify-end transition-all duration-500 ease-out"></div>
                                        <div className="absolute bottom-8 lg:bottom-12 xl:bottom-20 w-full text-center px-4">
                                            <h3 className="text-white text-xl 2xl:text-[27px] lg:leading-9 font-light">
                                                {it.title}
                                            </h3>
                                        </div>
                                        <Link href={it.link ?? "#"} className="absolute inset-0">
                                            <span className="sr-only">{it.title}</span>
                                        </Link>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next button */}
                    <button
                        onClick={next}
                        aria-label="Next"
                        className="absolute -right-4 2xl:-right-5 top-1/2 -translate-y-1/2 h-14 2xl:w-[70px] 2xl:h-[70px] z-1 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                    >
                        <Image src={sliderArrowNext} alt="Next" width={70} height={70} className="w-full h-full" />
                    </button>
                </div>

                <div className="flex justify-center mt-10">
                    <Link href="/blog">
                        <Button variant="primary">View All Blogs</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

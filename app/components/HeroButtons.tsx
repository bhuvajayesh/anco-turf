"use client";

import Button from "./Button";

interface HeroButtonsProps {
    buttons: any[];
}

export default function HeroButtons({ buttons }: HeroButtonsProps) {
    return (
        <div className="flex gap-2.5 mt-10">
            {buttons?.map((item: any, index: number) => {
                return (
                    <Button
                        key={index}
                        variant="primary"
                        onClick={() => {
                            window.open(item?.bannerButton?.url, "_blank");
                        }}
                        className="border border-white text-white custom-px-small-mobile"
                    >
                        {item?.bannerButton?.title}
                    </Button>
                );
            })}
        </div>
    );
}

import React from "react";

interface InfoBannerProps {
    title: string;
    description: string;
    backgroundImage: string; // grass image
}

export default function InfoBanner({
    title,
    description,
    backgroundImage,
}: InfoBannerProps) {
    return (
        <section className="w-full">
            <div
                className="rounded-[20px] p-10 pr-[30px]"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex items-center justify-between gap-10 text-white">
                    <h3 className="text-4xl 2xl:text-[38px] xl:leading-none max-w-md">
                        {title}
                    </h3>
                    <p className="text-sm xl:text-base leading-6 max-w-lg">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}

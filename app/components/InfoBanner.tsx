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
                className="rounded-[20px] p-10 md:pr-[30px] bg-contain md:bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-white">
                    <h3 className="flex-1 lg:flex-none text-4xl md:text-2xl xl:text-3xl 2xl:text-[38px] xl:leading-none lg:max-w-md">
                        {title}
                    </h3>
                    <p className="flex-1 lg:flex-none md:text-sm xl:text-base leading-6 md:leading-normal lg:leading-6 lg:max-w-lg">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}

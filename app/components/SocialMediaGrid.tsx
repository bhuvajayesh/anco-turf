import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import socialMedia1 from "../../public/images/social-media/social-media1.jpg";
import socialMedia2 from "../../public/images/social-media/social-media2.jpg";
import socialMedia3 from "../../public/images/social-media/social-media3.jpg";
import socialMedia4 from "../../public/images/social-media/social-media4.jpg";
import socialMedia5 from "../../public/images/social-media/social-media5.jpg";
import socialMedia6 from "../../public/images/social-media/social-media6.jpg";
import socialMedia7 from "../../public/images/social-media/social-media7.jpg";
import socialMedia8 from "../../public/images/social-media/social-media8.jpg";
import logoWhite from "../../public/images/logo-white-small.svg";
import instagramIcon from "../../public/images/instagram-icon.svg";
import pinterestIcon from "../../public/images/pinterest-icon.svg";
import Button from "./Button";

const posts = [
    {
        id: 1,
        image: socialMedia1,
        platform: instagramIcon,
        time: "1 Week Ago",
        link: "https://www.instagram.com/ancoturf",
    },
    {
        id: 2,
        image: socialMedia2,
        platform: instagramIcon,
        time: "2 Week Ago",
        link: "https://www.instagram.com/ancoturf",
    },
    {
        id: 3,
        image: socialMedia3,
        platform: pinterestIcon,
        time: "1 Week Ago",
        link: "https://www.pinterest.com/ancoturf",
    },
    {
        id: 4,
        image: socialMedia4,
        platform: pinterestIcon,
        time: "1 Week Ago",
        link: "https://www.pinterest.com/ancoturf",
    },
    {
        id: 5,
        image: socialMedia5,
        platform: instagramIcon,
        time: "1 Week Ago",
        link: "https://www.instagram.com/ancoturf",
    },
    {
        id: 6,
        image: socialMedia6,
        platform: instagramIcon,
        time: "1 Week Ago",
        link: "https://www.instagram.com/ancoturf",
    },
    {
        id: 7,
        image: socialMedia7,
        platform: pinterestIcon,
        time: "1 Week Ago",
        link: "https://www.pinterest.com/ancoturf",
    },
    {
        id: 8,
        image: socialMedia8,
        platform: pinterestIcon,
        time: "1 Week Ago",
        link: "https://www.pinterest.com/ancoturf",
    },
];


export default function SocialMediaGrid() {
    return (
        <section className="bg-[#F6F6F6] py-20">
            <div className="container mx-auto">
                <div className="text-center mb-[30px]">
                    <SectionTitle title="Latest on Social media" />
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-5">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="relative overflow-hidden rounded-[20px] aspect-square"
                        >
                            <Image
                                src={post.image}
                                alt=""
                                width={395}
                                height={395}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute left-0 bottom-0 w-full h-full rounded-[20px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]"></div>
                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-2.5">
                                        <span className="bg-[#528917] w-10 h-10 border border-white rounded-full flex items-center justify-center">
                                            <Image src={logoWhite} alt="Logo" width={26} height={9} />
                                        </span>
                                        <div>
                                            <p className="text-lg 2xl:text-[21px] font-bold leading-none">
                                                Anco Turf
                                            </p>
                                            <p className="mt-[3px] leading-none">{post.time}</p>
                                        </div>
                                    </div>
                                    <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                                        <Link href={post.link}>
                                            <Image
                                                src={post.platform}
                                                alt="Platform Icon"
                                                width={20}
                                                height={20}
                                                className="w-auto h-auto"
                                            />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 2xl:gap-5 mt-10">
                    <div className="flex-1 text-center">
                        <Link href="#" className="inline-block">
                            <Button variant="primary" className="flex items-center gap-2.5 !py-[9px] group">
                                <div className="w-10 aspect-square bg-[#5D9732] group-hover:bg-white rounded-full flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-[#5D9732]">
                                        <path d="M14.167 1.668C15.2712 1.67117 16.3292 2.1112 17.11 2.89198C17.8908 3.67276 18.3308 4.73082 18.334 5.835V14.168C18.3308 15.2722 17.8908 16.3302 17.11 17.111C16.3292 17.8918 15.2712 18.3318 14.167 18.335H5.833C4.72882 18.3318 3.67076 17.8918 2.88998 17.111C2.1092 16.3302 1.66917 15.2722 1.666 14.168V5.834C1.66917 4.72982 2.1092 3.67176 2.88998 2.89098C3.67076 2.1102 4.72882 1.67017 5.833 1.667H14.166M14.166 0H5.833C4.2872 0.00448633 2.80601 0.62061 1.71305 1.71376C0.620092 2.8069 0.00422134 4.2882 0 5.834V14.167C0.00422134 15.7128 0.620092 17.1941 1.71305 18.2872C2.80601 19.3804 4.2872 19.9965 5.833 20.001H14.166C15.7118 19.9968 17.1931 19.3809 18.2862 18.288C19.3794 17.195 19.9955 15.7138 20 14.168V5.834C19.9955 4.28837 19.3795 2.80733 18.2866 1.7144C17.1937 0.621472 15.7126 0.00548501 14.167 0.000999928L14.166 0Z" />
                                        <path d="M15.3936 5.89831C15.1385 5.8989 14.889 5.82381 14.6766 5.68253C14.4642 5.54126 14.2986 5.34015 14.2005 5.10467C14.1025 4.86919 14.0766 4.60992 14.126 4.35968C14.1754 4.10944 14.2979 3.87948 14.478 3.69891C14.6582 3.51834 14.8879 3.39528 15.138 3.3453C15.3881 3.29532 15.6474 3.32067 15.8831 3.41814C16.1189 3.51562 16.3203 3.68083 16.4621 3.89287C16.6039 4.10491 16.6796 4.35424 16.6796 4.60931C16.68 4.77844 16.647 4.94599 16.5825 5.10236C16.5181 5.25873 16.4234 5.40085 16.304 5.52059C16.1845 5.64032 16.0426 5.73532 15.8864 5.80013C15.7302 5.86495 15.5627 5.89831 15.3936 5.89831Z" />
                                        <path d="M10.0049 6.86588C10.6255 6.86588 11.2322 7.04992 11.7483 7.39472C12.2643 7.73953 12.6665 8.22962 12.904 8.80301C13.1415 9.37641 13.2037 10.0074 13.0826 10.6161C12.9615 11.2248 12.6626 11.7839 12.2238 12.2228C11.7849 12.6616 11.2258 12.9605 10.6171 13.0816C10.0084 13.2027 9.37741 13.1405 8.80402 12.903C8.23062 12.6655 7.74053 12.2633 7.39573 11.7473C7.05092 11.2312 6.86688 10.6245 6.86688 10.0039C6.86767 9.17187 7.19854 8.37417 7.78685 7.78585C8.37517 7.19753 9.17287 6.86667 10.0049 6.86588ZM10.0049 5.29688C9.07372 5.29688 8.16348 5.57299 7.38925 6.09032C6.61503 6.60764 6.01159 7.34293 5.65525 8.2032C5.29892 9.06348 5.20568 10.0101 5.38734 10.9234C5.569 11.8366 6.01739 12.6755 6.67582 13.3339C7.33424 13.9924 8.17313 14.4408 9.08639 14.6224C9.99965 14.8041 10.9463 14.7108 11.8066 14.3545C12.6668 13.9982 13.4021 13.3947 13.9194 12.6205C14.4368 11.8463 14.7129 10.936 14.7129 10.0049C14.7126 8.75632 14.2165 7.55897 13.3336 6.67611C12.4508 5.79325 11.2534 5.29714 10.0049 5.29688Z" />
                                    </svg>
                                </div>
                                FOLLOW US ON INSTAGRAM
                            </Button>
                        </Link>
                    </div>
                    <div className="flex-1 text-center">
                        <Link href="#" className="inline-block">
                            <Button variant="primary" className="flex items-center gap-2.5 !py-[9px] group">
                                <div className="w-10 aspect-square bg-[#5D9732] group-hover:bg-white rounded-full flex items-center justify-center">
                                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:fill-[#5D9732]">
                                        <path d="M8.789 0C4.368 0 0 2.943 0 7.716C0 10.749 1.706 12.472 2.74 12.472C3.167 12.472 3.412 11.283 3.412 10.947C3.412 10.547 2.391 9.693 2.391 8.026C2.37719 7.23384 2.52521 6.44719 2.826 5.71423C3.12679 4.98126 3.57402 4.3174 4.1403 3.76329C4.70658 3.20918 5.38 2.77648 6.11932 2.49168C6.85865 2.20689 7.64832 2.07599 8.44 2.107C11.374 2.107 13.545 3.774 13.545 6.837C13.545 9.125 12.627 13.415 9.655 13.415C9.39955 13.4253 9.14463 13.3843 8.90529 13.2944C8.66596 13.2046 8.44706 13.0676 8.26155 12.8917C8.07604 12.7158 7.92766 12.5045 7.8252 12.2702C7.72274 12.036 7.66827 11.7836 7.665 11.528C7.664 9.9 8.8 8.323 8.8 6.643C8.8 3.791 4.755 4.308 4.755 7.754C4.72901 8.50544 4.87078 9.25322 5.17 9.943C4.575 12.498 3.36 16.311 3.36 18.943C3.36 19.757 3.476 20.559 3.554 21.373C3.7 21.537 3.627 21.519 3.854 21.438C6.025 18.465 5.948 17.884 6.93 13.994C7.25693 14.483 7.70202 14.8815 8.224 15.1526C8.74598 15.4237 9.32796 15.5587 9.916 15.545C14.491 15.545 16.546 11.086 16.546 7.067C16.543 2.792 12.847 0 8.789 0Z" />
                                    </svg>
                                </div>
                                FOLLOW US ON PINTEREST
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

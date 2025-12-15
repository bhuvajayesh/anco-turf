import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import applicationMockup from "../../public/images/application.png";
import googlePlaystore from "../../public/images/google-playstore.svg";
import appStore from "../../public/images/app-store.svg";
import playIcon from "../../public/images/play-icon.svg";

export default function AppPromoSection() {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(237,244,238,0)_0%,#F6F6F6_65.07%)]">
            <div className="container mx-auto">
                <div className="flex items-center justify-center gap-[167px]">
                    <div className="text-center">
                        <div className="text-[#5D9732]">
                            <SectionTitle
                                title={
                                    <>
                                        Best App for Lawn & <br /> Garden Care
                                    </>
                                }
                            />
                        </div>
                        <p className="mt-[30px] mb-5 text-[#404040]">Download Anco App</p>
                        <div className="flex justify-center gap-2.5">
                            <Link href="">
                                <Image
                                    src={googlePlaystore}
                                    alt="Google Play"
                                    width={141}
                                    height={42}
                                    className="h-[42px] w-auto"
                                />
                            </Link>
                            <Link href="">
                                <Image
                                    src={appStore}
                                    alt="App Store"
                                    width={126}
                                    height={42}
                                    className="h-[42px] w-auto"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT PHONE MOCKUP */}
                    <div className="relative">
                        <Image
                            src={applicationMockup}
                            alt="Anco App"
                            width={340}
                            height={551}
                            priority
                            className="w-[340px] h-auto"
                        />
                        <button
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            aria-label="Play video"
                        >
                            <div className="w-20 2xl:w-[100px] aspect-square flex items-center justify-center">
                                <Image
                                    src={playIcon}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

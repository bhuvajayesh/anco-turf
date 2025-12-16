import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import faqsImage from "../../public/images/faq-image.png";
import arrowIcon from "../../public/images/arrow-down.svg";
import Button from "./Button";

const tabs = [
    "Mowing",
    "Watering & Drainage",
    "Fertilisation & Soil",
    "Weed & Pest Control",
];

type ContentTab = {
    type: "content";
    text: string;
};

type FaqTab = {
    type: "faq";
    faqs: {
        question: string;
        answer: string;
    }[];
};

type TabItem = ContentTab | FaqTab;


const faqs = [
    {
        question: "When Should I Fertilise And How Often?",
        answer:
            "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
    },
    {
        question: "How Do I Aerate A Lawn And Why?",
        answer:
            "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
    },
    {
        question: "What Is The Ideal Soil pH Level For Lawns?",
        answer:
            "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
    },
    {
        question: "What Soil Type Should I Use For The Lawn?",
        answer:
            "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
    },
    {
        question: "When Should I First Mow My New Turf?",
        answer:
            "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
    },
];

const tabContent: Record<string, TabItem> = {
    Mowing: {
        type: "faq",
        faqs: [
            {
                question: "When Should I Fertilise And How Often?",
                answer:
                    "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
            },
            {
                question: "How Do I Aerate A Lawn And Why?",
                answer:
                    "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
            },
            {
                question: "What Is The Ideal Soil pH Level For Lawns?",
                answer:
                    "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
            },
            {
                question: "What Soil Type Should I Use For The Lawn?",
                answer:
                    "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
            },
            {
                question: "When Should I First Mow My New Turf?",
                answer:
                    "Use Lawn Starter On New Turf And Then Fertilise With A High Nitrogen Lawn Food 4–6 Weeks After Laying. For Warm Season Grasses Such As Sir Walter, Eureka Kikuyu And Nullarbor Couch Fertilise Twice In Spring, Summer And Autumn. There Is No Need To Fertilise In Winter.",
            },
        ],
    },

    "Watering & Drainage": {
        type: "faq",
        faqs: [
            {
                question: "Watering & Drainage Question?",
                answer:
                    "Watering & Drainage Answer",
            },
        ],
    },

    "Fertilisation & Soil": {
        type: "faq",
        faqs: [
            {
                question: "Fertilisation & Soil Question?",
                answer:
                    "Fertilisation & Soil Answer",
            },
        ],
    },

    "Weed & Pest Control": {
        type: "faq",
        faqs: [
            {
                question: "Weed & Pest Control Question?",
                answer:
                    "Weed & Pest Control Answer",
            },
        ],
    },
};


/* ---------- COMPONENT ---------- */

export default function FaqSection() {
    const [activeTab, setActiveTab] = useState(0);
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const activeTabKey = tabs[activeTab] as keyof typeof tabContent;
    const currentTab = tabContent[activeTabKey];

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 2xl:gap-[105px] items-start">
                    <div className="w-full lg:w-auto 2xl:w-[815px] flex-1 2xl:flex-none">
                        <Image
                            src={faqsImage}
                            alt=""
                            width={815}
                            height={680}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex-1">
                        <div className="mb-10">
                            <SectionTitle title="Frequently Asked Questions" />
                        </div>
                        {/* TABS */}
                        <div className="flex justify-between gap-2 border-b-[2px] border-[#F6F6F6] mb-4 xl:mb-8">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setActiveTab(index);
                                        setOpenIndex(0);
                                    }}
                                    className={`pb-5 font-medium text-sm xl:text-base relative ${activeTab === index
                                        ? "text-[#528917]"
                                        : "text-[#404040]"
                                        }`}
                                >
                                    {tab}
                                    {activeTab === index && (
                                        <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-[#528917]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* ACCORDION */}
                        <div className="space-y-5 mb-10">
                            {/* TAB CONTENT */}
                            {currentTab.type === "content" && (
                                <div className="border border-[#F6F6F6] rounded-lg p-6 leading-7">
                                    {currentTab.text}
                                </div>
                            )}

                            {currentTab.type === "faq" && (
                                <div className="space-y-5 mb-10">
                                    {currentTab.faqs.map((faq, index) => {
                                        const isOpen = openIndex === index;

                                        return (
                                            <div
                                                key={index}
                                                className="border-b border-[#528917] pb-2.5 transition-all duration-300"
                                            >
                                                <button
                                                    className="w-full flex justify-between items-center leading-8"
                                                    onClick={() =>
                                                        setOpenIndex(isOpen ? null : index)
                                                    }
                                                >
                                                    <span>{faq.question}</span>

                                                    <Image
                                                        width={24}
                                                        height={24}
                                                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                            }`}
                                                        src={arrowIcon}
                                                        alt="Arrow"
                                                    />
                                                </button>

                                                {isOpen && (
                                                    <p className="mt-2.5 leading-normal xl:leading-6 text-sm xl:text-base">
                                                        {faq.answer}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                        </div>

                        {/* CTA */}
                        <Button variant="primary">VIEW ALL FAQS</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

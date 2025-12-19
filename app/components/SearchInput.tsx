"use client";

import Image from "next/image";

type SearchInputProps = {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
};

export default function SearchInput({
    placeholder = "Search Product",
    value,
    onChange,
}: SearchInputProps) {
    return (
        <div className="container mx-auto">
            <div className="relative w-full">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                    className="w-full rounded-lg bg-[#F6F6F6] border border-[#81837F] px-5 pr-12 py-3.5 leading-[30px] placeholder:text-[#202020] outline-none"
                />
                <button className="absolute right-5 top-1/2 -translate-y-1/2">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                            stroke="#5D9732"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

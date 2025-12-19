"use client";

import { useState, useRef, useEffect } from "react";

type Option = {
    label: string;
    value: string;
};

type CustomSelectProps = {
    options: Option[]; // REQUIRED
    defaultValue?: string;
    onChange?: (value: string) => void;
};

export default function CustomSelect({
    options,
    defaultValue,
    onChange,
}: CustomSelectProps) {
    // 🔒 SAFETY GUARD
    const safeOptions = options ?? [];

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(
        safeOptions.find((o) => o.value === defaultValue) || safeOptions[0] || null
    );

    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleSelect = (option: Option) => {
        setSelected(option);
        setOpen(false);
        onChange?.(option.value);
    };

    // ⛔ Nothing to render if no options
    if (!safeOptions.length) return null;

    return (
        <div className="container mx-auto">
            <div ref={ref} className="relative w-full max-w-[356px]">
                {/* Trigger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full rounded-lg leading-[30px] bg-[#F6F6F6] border border-[#81837F] px-5 py-3.5 flex items-center justify-between"
                >
                    <span>{selected?.label}</span>
                    <svg
                        className={`transition-transform ${open ? "rotate-180" : ""}`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.0034 16.8006C11.3034 16.8006 10.6034 16.5306 10.0734 16.0006L3.55344 9.48062C3.26344 9.19062 3.26344 8.71062 3.55344 8.42063C3.84344 8.13063 4.32344 8.13063 4.61344 8.42063L11.1334 14.9406C11.6134 15.4206 12.3934 15.4206 12.8734 14.9406L19.3934 8.42063C19.6834 8.13063 20.1634 8.13063 20.4534 8.42063C20.7434 8.71062 20.7434 9.19062 20.4534 9.48062L13.9334 16.0006C13.4034 16.5306 12.7034 16.8006 12.0034 16.8006Z"
                            fill="#5E9831"
                        />
                    </svg>
                </button>

                {/* Dropdown */}
                {open && (
                    <div className="absolute py-2.5 left-0 top-[60px] w-full rounded-lg border border-[#81837F] bg-[#F6F6F6] overflow-hidden z-20">
                        {safeOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className={`w-full text-left px-5 py-[5px] ${selected?.value === option.value
                                        ? "bg-[#5E9831] text-white"
                                        : "hover:bg-[#5E9831] hover:text-white"
                                    }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

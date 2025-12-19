"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import QuantityCounter from "./ComponentCount";
import closeIcon from "@/public/images/close-icon.svg";

type CartItemProps = {
    image: StaticImageData;
    title: string;
    unitPrice: string;
    unit: string;
    totalPrice: string;
    initialQuantity?: number;
    onRemove: () => void;
};

export default function CartItem({
    image,
    title,
    unitPrice,
    unit,
    totalPrice,
    initialQuantity = 1,
    onRemove,
}: CartItemProps) {
    // ✅ LOCAL STATE (this replaces values[index])
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-5">
                <div className="w-[150px] aspect-square rounded-xl overflow-hidden shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="leading-6">{title}</h3>
                </div>
                <div className="font-bold">{unitPrice}</div>
                <div className="min-w-[170px]">
                    <QuantityCounter
                        value={quantity}
                        unit={unit}
                        onChange={setQuantity}
                    />
                </div>
                <div className="w-[100px] text-right font-semibold">{totalPrice}</div>
                <button onClick={onRemove} className="transition">
                    <Image src={closeIcon} alt="" width={14} height={14} />
                </button>
            </div>
        </div>
    );
}

import React from "react";
import { CardProps } from "@/types/CardProps";

const getSizeStyle = (size: string) => {
    switch (size) {
        case "compact":
            return "w-40 h-20 lg:w-44 lg:h-24";
        case "default":
            return "w-44 h-24 lg:w-48 lg:h-28";
        case "expanded":
            return "w-48 h-28 lg:w-64 lg:h-32";
        default:
            return "w-40 h-20 lg:w-44 lg:h-24";
    }
};

const getColorStyle = (color: string) => {
    switch (color) {
        case "blue":
            return "bg-sky-300";
        case "green":
            return "bg-green-300";
        case "orange":
            return "bg-orange-400";
        case "gray":
            return "bg-gray-500";
        default:
            return "bg-gray-500";
    }
};

const Card = ({ children, size, color }: CardProps) => {
    const colorStyle = getColorStyle(color);
    const sizeStyle = getSizeStyle(size);
    return (
        <article
            className={`${colorStyle} ${sizeStyle} flex flex-col justify-center p-2 lg:p-4 rounded`}
        >
            {children}
        </article>
    );
};

export default Card;

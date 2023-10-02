import React from "react";
import { CardProps } from "@/types/CardProps";

const Card = ({ children, size, color }: CardProps) => {
    const colorMap = {
        blue: "bg-sky-300 hover:bg-sky-400",
        green: "bg-green-300 hover:bg-green-400",
        orange: "bg-orange-400 hover:bg-orange-500",
        gray: "bg-gray-500 hover:bg-gray-600",
    };
    const sizeStyle = (size: string) => {
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
    return (
        <article
            className={`${colorMap[color] || colorMap["blue"]} ${sizeStyle(
                size
            )} flex flex-col justify-center p-2 lg:p-4 rounded`}
        >
            {children}
        </article>
    );
};

export default Card;

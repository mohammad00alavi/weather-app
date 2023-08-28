import React from "react";
import { ComponentWithChildren } from "../../types/ComponentWithChildren";

interface CardProps extends ComponentWithChildren {
    size: "compact" | "default" | "expanded";
    color: "blue" | "green" | "orange" | "gray";
}

const Card = ({ children, size, color }: CardProps) => {
    const getSizeStyle = (size: string) => {
        switch (size) {
            case "compact":
                return "w-20	lg:w-28";
            case "default":
                return "w-24	lg:w-32";
            case "expanded":
                return "w-32	lg:w-36";
            default:
                return "w-20	lg:w-32";
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
    const colorStyle = getColorStyle(color);
    const sizeStyle = getSizeStyle(size);

    return <article className={`${colorStyle} ${sizeStyle}`}>{children}</article>;
};

export default Card;

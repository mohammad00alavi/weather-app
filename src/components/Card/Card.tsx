import React from "react";
import { CardProps } from "@/types/CardProps";
import { getColorStyle } from "@/utils/getColorStyle";
import { getSizeStyle } from "@/utils/getSizeStyle";

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

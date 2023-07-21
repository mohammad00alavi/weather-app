import { InfoLinkProps } from "@/types/InfoLinkProps";
import React from "react";

const InfoLink: React.FC<InfoLinkProps> = ({ href, text, icon }) => {
    return (
        <a href={href} target="_blank" className="flex flex-row gap-x-2 items-center cursor-pointer">
            <span>{icon}</span>
            <span>{text}</span>
        </a>
    );
};

export default InfoLink;

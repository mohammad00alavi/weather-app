import { HeadingProps } from "@/types/Heading";
import React from "react";

const Heading: React.FC<HeadingProps> = ({ text, type, className }) => {
    switch (type) {
        case "h1":
            return <h1 className={className}>{text}</h1>;
        case "h2":
            return <h2 className={className}>{text}</h2>;
        case "h3":
            return <h3 className={className}>{text}</h3>;
        default:
            return <h1 className={className}>{text}</h1>;
    }
};

export default Heading;

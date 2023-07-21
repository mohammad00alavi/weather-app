import React from "react";
import { IconBoxProps } from "@/types/IconBoxProps";

const IconBox: React.FC<IconBoxProps> = ({ data, icon, className }) => {
    return (
        <div className={className}>
            <div className="mb-2 self-center">{icon}</div>
            <p className="text-center">{data}</p>
        </div>
    );
};

export default IconBox;

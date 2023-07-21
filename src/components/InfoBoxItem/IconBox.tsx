import React from "react";
import { IconBoxProps } from "@/types/IconBoxProps";

const IconBox: React.FC<IconBoxProps> = (props) => {
    return (
        <div className={props.iconClasses}>
            <div className="mb-2 self-center">{props.icon}</div>
            <p className={props.textClasses}>{props.data}</p>
        </div>
    );
};

export default IconBox;

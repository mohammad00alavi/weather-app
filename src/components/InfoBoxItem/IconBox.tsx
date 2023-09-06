import React from "react";
import { IconBoxProps } from "@/types/IconBoxProps";
import Metrics from "../Metrics/Metrics";

const IconBox: React.FC<IconBoxProps> = (props) => {
    return (
        <div className={props.iconClasses}>
            <div className="mb-2 self-center">{props.icon}</div>
            <p className={props.textClasses}>
                {props?.data
                    ? props?.data
                    : `${props?.tempMax} / ${props?.tempMin}`}
                <Metrics status={props.status} />
            </p>
        </div>
    );
};

export default IconBox;

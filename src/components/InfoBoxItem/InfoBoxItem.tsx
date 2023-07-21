import React from "react";
import { InfoBoxItemProps } from "@/types/InfoBoxItemProps";

const InfoBoxItem: React.FC<InfoBoxItemProps<string>> = ({ data, icon }) => {
    return (
        <div className="flex flex-col">
            <div>{icon}</div>
            <p>{data}</p>
        </div>
    );
};

export default InfoBoxItem;

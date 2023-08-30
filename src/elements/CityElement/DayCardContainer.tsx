import DayCard from "@/components/DayCard/DayCard";
import { getMaxMinTempByDay } from "@/utils/getMaxMinTempByDay";
import React from "react";

const DayCardContainer = ({ data }) => {
    const forecast = getMaxMinTempByDay(data);
    return (
        <div className="flex flex-row">
            {forecast.map((item) => (
                <DayCard key={item.day} data={item} />
            ))}
        </div>
    );
};

export default DayCardContainer;

import DayCard from "@/components/DayCard/DayCard";
import { ForecastData } from "@/types/ForecastData";
import { getMaxMinTempByDay } from "@/utils/getMaxMinTempByDay";
import React from "react";

interface DayCardContainerProps {
    isMobile: boolean;
    data: ForecastData[];
}

const DayCardContainer = ({ data, isMobile }: DayCardContainerProps) => {
    const forecast = getMaxMinTempByDay(data, isMobile);
    return (
        <div className="flex flex-row">
            {forecast.map((item) => (
                <DayCard key={item.day} data={item} />
            ))}
        </div>
    );
};

export default DayCardContainer;

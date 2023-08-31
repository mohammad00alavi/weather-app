import React from "react";
import IconBox from "../InfoBoxItem";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import { DayTemperature } from "@/types/DayTemperature";

interface DayCardProps {
    data: DayTemperature;
}

const DayCard = ({ data }: DayCardProps) => {
    if (!data.maxTemp || !data) {
        return <div>loading...</div>;
    }
    return (
        <div className="flex flex-col gap-2 justify-center items-center p-2 md:mr-4 self-end">
            <h3 className="text-white text-shadow ">{data.day}</h3>
            <IconBox
                data={data.maxTemp}
                status={data.status}
                icon={getWeatherIcon(data.status, "info")}
                iconClasses="flex flex-col mx-3 md:mx-6 rounded self-center"
                textClasses="text-center md:text-2xl text-shadow text-white"
            />
        </div>
    );
};

export default DayCard;

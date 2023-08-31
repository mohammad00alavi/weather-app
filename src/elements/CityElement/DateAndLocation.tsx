import React from "react";
import Date from "@/components/Date/Date";
import CityName from "@/components/CityName/CityName";
import IconBox from "@/components/InfoBoxItem";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import { useTemperature } from "@/hooks/useTemperature";
import { useWeatherDescription } from "@/hooks/useWeatherDescription";
import { Description, Temperature } from "@/types/CityDataTypes";

const DateAndLocation = () => {
    const { temp } = useTemperature<Temperature>();
    const { weather } = useWeatherDescription<Description>();
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center p-4 mt-8 gap-4">
            <IconBox
                data={Math.round(temp)}
                icon={getWeatherIcon(weather, "main")}
                status={"temp"}
                iconClasses={"flex flex-row gap-4 items-center ml-6 md:ml-0"}
                textClasses={
                    "text-center text-5xl font-bold text-shadow text-white"
                }
            />
            <div className="flex flex-col gap-2 border-l-0 lg:border-l-200 lg:border-l-[0.5px] pl-4">
                <Date />
                <CityName />
            </div>
        </div>
    );
};

export default DateAndLocation;

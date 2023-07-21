import IconBox from "@/components/InfoBoxItem/IconBox";
import { useTemperature } from "@/hooks/useTemperature";
import { useWeatherDescription } from "@/hooks/useWeatherDescription";
import { Description, Temperature } from "@/types/CityDataTypes";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import React from "react";
import InfoContainer from "../CityElement/InfoContainer";

const TempContainer = () => {
    const { temp } = useTemperature<Temperature>();
    const { weather } = useWeatherDescription<Description>();
    return (
        <div className="flex flex-row w-full justify-between px-6">
            <IconBox
                data={Math.round(temp)}
                icon={getWeatherIcon(weather, "main")}
                className={"flex flex-col items-center"}
            />
            <InfoContainer />
        </div>
    );
};

export default TempContainer;

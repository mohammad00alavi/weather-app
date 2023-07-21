import InfoBoxItem from "@/components/InfoBoxItem/InfoBoxItem";
import { useTemperature } from "@/hooks/useTemperature";
import { useWeatherDescription } from "@/hooks/useWeatherDescription";
import { Description, Temperature } from "@/types/CityDataTypes";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import React from "react";
import Icons from "@/components/Icons/Icons";

const TempContainer = () => {
    const { temp } = useTemperature<Temperature>();
    const { weather } = useWeatherDescription<Description>();

    return (
        <div>
            <InfoBoxItem
                data={Math.round(temp)}
                icon={getWeatherIcon(weather)}
            />
        </div>
    );
};

export default TempContainer;

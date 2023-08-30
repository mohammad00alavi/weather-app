import IconBox from "@/components/InfoBoxItem/IconBox";
import { useTemperature } from "@/hooks/useTemperature";
import { useWeatherDescription } from "@/hooks/useWeatherDescription";
import { Description, Temperature } from "@/types/CityDataTypes";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import React from "react";
import InfoContainer from "./InfoContainer";
import ForecastContainer from "./ForecastContainer";
import { useWindowSize } from "@/hooks/useWindowSize";

const TempContainer = () => {
    const { temp } = useTemperature<Temperature>();
    const { weather } = useWeatherDescription<Description>();
    const {isMobile} = useWindowSize();
    return (
        <div className="flex flex-row w-full justify-between px-2 md:px-16 bg-white bg-opacity-60 pt-4 pb-6 gap-4">
            <IconBox
                data={Math.round(temp)}
                icon={getWeatherIcon(weather, "main")}
                status={"temp"}
                iconClasses={"flex flex-col items-center ml-6 md:ml-0"}
                textClasses={
                    "text-center text-4xl font-bold text-shadow text-cyan-300"
                }
            />
            {!isMobile && <ForecastContainer />}
            <InfoContainer />
        </div>
    );
};

export default TempContainer;

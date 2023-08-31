import Chart from "@/components/Chart/Chart";
import use4DaysForecast from "@/hooks/use4DaysForecast";
import useCoordinates from "@/hooks/useCoordinates";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DayCardContainer from "./DayCardContainer";
import SwitchButton from "@/components/SwitchButton/SwitchButton";
import { useWindowSize } from "@/hooks/useWindowSize";

const ForecastContainer = () => {
    const [showChart, setShowChart] = useState(false);
    const router = useRouter();
    const city = router.query.city;
    const { isMobile } = useWindowSize();
    // TODO - fix type errors
    const coordinates = useCoordinates(city);
    const forecast = use4DaysForecast(coordinates?.lat, coordinates?.lon);
    console.log(forecast)
    const handleForecastClick = () => {
        setShowChart(false);
    };

    const handleHourlyTemperatureClick = () => {
        setShowChart(true);
    };

    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-row pb-4 gap-4 justify-center">
                <SwitchButton
                    text={"Forecast"}
                    clickHandler={handleForecastClick}
                    classes={!showChart ? "border-b-2" : "border-b-0"}
                />
                <SwitchButton
                    text={"Hourly Temperature"}
                    clickHandler={handleHourlyTemperatureClick}
                    classes={showChart ? "border-b-2" : "border-b-0"}
                />
            </div>
            <div className="flex flex-row justify-center w-full px-2 md:px-16 bg-white bg-opacity-30 pt-4 pb-6">
                {showChart ? (
                    <Chart data={forecast?.slice(0, isMobile ? 10 : 20)} />
                ) : (
                    <DayCardContainer data={forecast} isMobile={isMobile} />
                )}
            </div>
        </div>
    );
};

export default ForecastContainer;

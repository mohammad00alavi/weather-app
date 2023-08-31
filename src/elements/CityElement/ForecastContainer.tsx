import Chart from "@/components/Chart/Chart";
import use4DaysForecast from "@/hooks/use4DaysForecast";
import useCoordinates from "@/hooks/useCoordinates";
import { useRouter } from "next/router";
import React from "react";
import DayCardContainer from "./DayCardContainer";
import { useWindowSize } from "@/hooks/useWindowSize";
import PrecipitationAndWindContainer from "./PrecipitationAndWindContainer";

interface ForecastContainerProps {
    activeComponent: string;
}

const ForecastContainer = ({ activeComponent }: ForecastContainerProps) => {
    const router = useRouter();
    const city = router.query.city;
    const { isMobile } = useWindowSize();
    const cityName = typeof city === "string" ? city : "";
    const coordinates = useCoordinates(cityName);
    const forecast = use4DaysForecast(coordinates?.lat, coordinates?.lon);

    if (!forecast) {
        return <div>loading...</div>;
    }

    return (
        <div className="flex flex-row items-center justify-center w-full px-2 md:px-16 bg-white bg-opacity-30 pt-4 pb-6 h-48">
            {activeComponent === "Temperature" ? (
                <Chart data={forecast?.slice(0, isMobile ? 10 : 20)} />
            ) : activeComponent === "Forecast" ? (
                <DayCardContainer data={forecast} isMobile={isMobile} />
            ) : (
                <PrecipitationAndWindContainer />
            )}
        </div>
    );
};

export default ForecastContainer;

import Chart from "@/components/Chart/Chart";
import use4DaysForecast from "@/hooks/use4DaysForecast";
import useCoordinates from "@/hooks/useCoordinates";
import { useRouter } from "next/router";
import React from "react";
import DayCardContainer from "./DayCardContainer";

const ForecastContainer = () => {
    const router = useRouter();
    const city = router.query.city;
    // TODO - fix type errors
    const coordinates = useCoordinates(city);
    const forecast = use4DaysForecast(coordinates?.lat, coordinates?.lon);
    return (
        <div className="flex justify-center">
            {/* <Chart data={forecast} /> */}
            <DayCardContainer data={forecast} />
        </div>
    );
};

export default ForecastContainer;

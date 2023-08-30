import Chart from "@/components/Chart/Chart";
import use4DaysForecast from "@/hooks/use4DaysForecast";
import useCoordinates from "@/hooks/useCoordinates";
import { useRouter } from "next/router";
import React from "react";

const ForecastContainer = () => {
    const router = useRouter();
    const city = router.query.city;
    const coordinates = useCoordinates(city);
    const forecast = use4DaysForecast(coordinates?.lat, coordinates?.lon);
    return (
        <div className="flex flex-row w-full h-28 justify-between px-2 md:px-16 bg-white bg-opacity-60 pt-4 pb-6">
            <Chart data={forecast} />
        </div>
    );
};

export default ForecastContainer;

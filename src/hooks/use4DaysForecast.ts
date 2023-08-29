import { fetch4DaysForecast } from "@/fetchers/fetch4DaysForecast";
import { useEffect, useState } from "react";

const use4DaysForecast = (lat: number, lon: number) => {
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch4DaysForecast(lat, lon);
            return res;
        };
        getData().then((data) => {
            setForecastData(data);

            setLoading(false);
        });
    }, [lat, lon]);

    if (loading) {
        return null;
    }

    return forecastData;
};

export default use4DaysForecast;

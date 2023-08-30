import { fetch4DaysForecast } from "@/fetchers/fetch4DaysForecast";
import { useEffect, useState } from "react";
// TODO - fix the type errors
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


    const forecast = forecastData?.data.list.map(item => ({
      date: item.dt_txt,
      temp: item.main.temp,
      weather: item.weather[0].main,
      description: item.weather[0].description,
    }));

    return forecast;
};

export default use4DaysForecast;

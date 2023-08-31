import { fetch4DaysForecast } from "@/fetchers/fetch4DaysForecast";
import { useEffect, useState } from "react";
import { ForecastItemFromAPI } from "../types/ForecastItemFromAPI";
import { ForecastDataFromAPI } from "@/types/ForecastDataFromAPI";
import { ForecastItem } from "@/types/ForecastItem";

const use4DaysForecast = (
    lat: number | undefined,
    lon: number | undefined
): ForecastItem[] | null => {
    const [forecastData, setForecastData] =
        useState<ForecastDataFromAPI | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!lat || !lon) {
            return;
        }
        const getData = async () => {
            try {
                const res = await fetch4DaysForecast(lat, lon);
                if (res?.status === 200) {
                    setForecastData(res.data);
                }
            } catch (error) {
                throw new Error("Network error");
            }
            setLoading(false);
        };

        getData();
    }, [lat, lon]);

    if (loading || !forecastData) {
        return null;
    }

    const forecast: ForecastItem[] = forecastData?.list.map(
        (item: ForecastItemFromAPI) => ({
            date: item.dt_txt,
            temp: item.main.temp,
            weather: item.weather[0].main,
            description: item.weather[0].description,
        })
    );
    return forecast || null;
};

export default use4DaysForecast;

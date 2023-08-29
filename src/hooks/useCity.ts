import { fetchCityData } from "@/fetchers/fetchCityData";
import { CityData } from "@/types/CityData";
import { useEffect, useState } from "react";

type Data = {
    cityData: CityData;
};
type UseCityHookResult = {
    cityData?: Data;
    loading: boolean;
};

const useCity = (cityName: string): UseCityHookResult => {
    const [city, setCity] = useState<CityData | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const res = await fetchCityData(cityName);
            return res?.data;
        };
        getData().then((data) => {
            setCity(data);
            setLoading(false);
        });
    }, [cityName]);
    // TODO - fix type error
    if (city) {
        return {
            cityData: {
                city: city.name,
                temp: city.main.temp,
                feels_like: city.main.feels_like,
                temp_min: city.main.temp_min,
                temp_max: city.main.temp_max,
                humidity: city.main.humidity,
                pressure: city.main.pressure,
                wind: city.wind,
                country: city.sys.country,
                weather: city.weather[0].main,
                description: city.weather[0].description,
            },
            loading: loading,
        };
    }
    return { loading: loading };
};

export default useCity;

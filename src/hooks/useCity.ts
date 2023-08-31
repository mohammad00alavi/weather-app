import { fetchCityData } from "@/fetchers/fetchCityData";
import { CityData } from "@/types/CityData";
import { CityDataResponse } from "@/types/CityDataResponse";
import { useEffect, useState } from "react";

type UseCityHookResult = {
    cityData?: CityData;
    loading: boolean;
};

const useCity = (cityName: string): UseCityHookResult => {
    const [city, setCity] = useState<CityDataResponse | null>(null);
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
    if (city) {
        const customizedCityData: CityData = {
            city: city.name,
            country: city.sys.country,
            feels_like: city.main.feels_like,
            humidity: city.main.humidity,
            pressure: city.main.pressure,
            temp: city.main.temp,
            temp_max: city.main.temp_max,
            temp_min: city.main.temp_min,
            wind: city.wind,
            weather: city.weather[0].main,
            description: city.weather[0].description,
        };
        return {
            cityData: customizedCityData,
            loading: loading,
        };
    }
    return { loading: loading };
};

export default useCity;

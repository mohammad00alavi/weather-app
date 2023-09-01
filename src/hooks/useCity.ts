import { fetchCityData } from "@/fetchers/fetchCityData";
import { CityData, CityDataHookResult } from "@/types/CityData";
import { CityDataResponse } from "@/types/CityDataResponse";
import { useEffect, useState } from "react";

const useCity = (cityName: string): CityDataHookResult => {
    const [city, setCity] = useState<CityDataResponse | null>(null);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchCityData(cityName);
                if (res?.data) {
                    setCity(res?.data);
                } else {
                    setError("City data not available");
                }
            } catch (error) {
                setError("Failed to fetch city data");
            }
        };
        fetchData();
    }, [cityName]);

    if (!city) {
        return { loading: true, cityData: null, error };
    }

    if (error) {
        return { loading: false, cityData: null, error };
    }

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
        loading: false,
        error: "",
    };
};

export default useCity;

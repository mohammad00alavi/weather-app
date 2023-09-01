import { fetchCityData } from "@/fetchers/fetchCityData";
import { CityData, CityDataHookResult } from "@/types/CityData";
import { CityDataResponse } from "@/types/CityDataResponse";
import { useEffect, useRef, useState } from "react";

const useCity = (cityName: string): CityDataHookResult => {
    const [city, setCity] = useState<CityDataResponse | null>(null);
    const isMounted = useRef(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchCityData(cityName);
                if (isMounted.current) {
                    if (res?.data) {
                        setCity(res?.data);
                    } else {
                        throw new Error("City data not available");
                    }
                }
            } catch (error) {
                if (isMounted.current) {
                    throw new Error("Failed to fetch city data");
                }
            }
        };
        fetchData();
        return () => {
            isMounted.current = false;
        };
    }, [cityName]);

    if (!city) {
        return { cityData: null };
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
    };
};

export default useCity;

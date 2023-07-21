import { CityDataHooks } from "@/types/CityDataHooks";
import { useAppContext } from "./useAppContext";
import { AppContextProps } from "@/types/AppContextProps";

export const useWeatherInfo = <T>(): CityDataHooks<T> => {
    const { cityData } = useAppContext<AppContextProps>();
    return {
        humidity: cityData.humidity as T,
        pressure: cityData.pressure as T,
        windSpeed: cityData.wind.speed as T,
        windDeg: cityData.wind.deg as T,
    };
};

import { AppContextProps } from "@/types/AppContextProps";
import { useAppContext } from "./useAppContext";
import { CityDataHooks } from "@/types/CityDataHooks";

export const useTemperature = <T>(): CityDataHooks<T> => {
    const { cityData } = useAppContext<AppContextProps>();
    return {
        temp: cityData.temp as T,
        feels_like: cityData.feels_like as T,
        temp_max: cityData.temp_max as T,
        temp_mix: cityData.temp_min as T,
    };
};

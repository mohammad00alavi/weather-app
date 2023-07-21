import { CityDataHooks } from "@/types/CityDataHooks";
import { useAppContext } from "./useAppContext";
import { AppContextProps } from "@/types/AppContextProps";

export const useWeatherDescription = <T>(): CityDataHooks<T> => {
    const { cityData } = useAppContext<AppContextProps>();
    return {
        weather: cityData.weather as T,
        description: cityData.description as T,
    };
};

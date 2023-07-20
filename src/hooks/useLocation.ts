import { CityDataHooks } from "@/types/CityDataHooks";
import { useAppContext } from "./useAppContext";
import { AppContextProps } from "@/types/AppContextProps";

export const useLocation = <T>(): CityDataHooks<T> => {
    const { cityData } = useAppContext<AppContextProps>();
    return {
        city: cityData.city as T,
        county: cityData.country as T,
    };
};

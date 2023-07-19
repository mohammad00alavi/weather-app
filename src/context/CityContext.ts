import { CityContextProps } from "@/types/CityContextProps";
import { createContext } from "react";

export const CityContext = createContext<CityContextProps>({
    cityData: undefined,
    cityName: "",
    setCityName: () => {},
    setCityData: () => {},
});

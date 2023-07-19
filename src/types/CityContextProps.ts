import { CityData } from "./CityData";

export interface CityContextProps {
    cityName: string;
    cityData: CityData | undefined;
    setCityName: (city: string) => void;
    setCityData: (data: CityData) => void;
}

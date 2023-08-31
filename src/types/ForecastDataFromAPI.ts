import { ForecastItemFromAPI } from "./ForecastItemFromAPI";

export interface ForecastDataFromAPI {
    cod: string;
    list: ForecastItemFromAPI[];
}

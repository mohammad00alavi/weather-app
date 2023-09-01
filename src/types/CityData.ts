import { WindData } from "./WindData";

export interface CityData {
    city: string;
    country: string;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    wind: WindData;
    weather: string;
    description: string;
}

export interface CityDataHookResult {
    cityData: CityData | null;
    loading: boolean;
    error: string;
}

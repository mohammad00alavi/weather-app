import { WindData } from "./WindData";

export interface CityDataResponse {
    name: string;
    sys: {
        country: string;
    };
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    wind: WindData;
    weather: [
        {
            main: string;
            description: string;
        }
    ];
}

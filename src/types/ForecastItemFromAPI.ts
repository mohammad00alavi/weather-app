interface MainWeatherInfo {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface ForecastItemFromAPI {
    dt: number;
    main: MainWeatherInfo;
    weather: Weather[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    dt_txt: string;
}

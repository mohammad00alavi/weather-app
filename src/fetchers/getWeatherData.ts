import { CityData } from "@/types/CityData";
import { fetchCityData } from "./fetchCityData";
import { GetServerSidePropsContext } from "next";
import { FetchCityDataResult } from "@/types/FetchCityDataResult";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const city = context.params?.city as string;
    const response: FetchCityDataResult = await fetchCityData(city);
    if (response) {
        const { data: weatherData, status } = response;
        if (status === 404) {
            return {
                props: { status },
            };
        }
        const cityData: CityData = {
            city: weatherData.name,
            temp: weatherData.main.temp,
            feels_like: weatherData.main.feels_like,
            temp_min: weatherData.main.temp_min,
            temp_max: weatherData.main.temp_max,
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            wind: weatherData.wind,
            country: weatherData.sys.country,
            weather: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
        };

        return {
            props: { cityData, status },
        };
    } else {
        return {
            props: {},
        };
    }
}

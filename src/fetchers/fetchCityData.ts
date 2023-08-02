import { Status } from "@/types/Status";
import getConfig from "next/config";

export async function fetchCityData(city: string) {
    const { publicRuntimeConfig } = getConfig();
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${publicRuntimeConfig.WEATHER_DATA}`;
    let status: Status;
    let res;
    try {
        res = await fetch(URL);
    } catch (error) {
        throw new Error("Network error, please try again later.");
    }
    const data = await res.json();

    if (data?.cod == 200) {
        status = 200;
        return { data, status };
    } else if (data?.cod == 404) {
        status = 404;
        return { data, status };
    }
}

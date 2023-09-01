import { Status } from "@/types/Status";

export async function fetchCityData(city: string) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
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

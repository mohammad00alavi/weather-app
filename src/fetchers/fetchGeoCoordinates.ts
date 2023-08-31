import { Status } from "@/types/Status";

export async function fetchGeoCoordinates(city: string) {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    let res;
    try {
        res = await fetch(URL);
    } catch (error) {
        throw new Error("Network error, please try again later.");
    }
    const data = await res.json();
    if (data) {
        return data?.[0];
    } else {
        return null;
    }
}

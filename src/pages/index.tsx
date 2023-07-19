/* import useWeather from "@/hooks/useWeather"; */
import HomeElement from "@/elements/HomeElement/HomeElement";
import { getServerSideProps as getWeatherData } from "@/fetchers/getWeatherData";

/* const weather = require("openweather-apis"); */

export default function Home() {
    /* useWeather(); */
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Home page</h1>
            <HomeElement />
        </main>
    );
}

/* export const getServerSideProps = getWeatherData; */

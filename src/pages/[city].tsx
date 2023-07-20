import CityElement from "@/elements/CityElement/CityElement";
import { getServerSideProps as getWeatherData } from "@/fetchers/getWeatherData";
import { PagePropsTypes } from "@/types/PagePropsTypes";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function City(pageProps: PagePropsTypes) {
    const router = useRouter();
    useEffect(() => {
        if (pageProps.status === 404) {
            router.push("/404", undefined, { shallow: true });
        }
    });
    return (
        <>
            {pageProps.status === 200 && pageProps?.cityData && (
                <CityElement pageProps={pageProps} />
            )}
        </>
    );
}

export const getServerSideProps = getWeatherData;

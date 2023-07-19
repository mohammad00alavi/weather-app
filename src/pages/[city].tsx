import { getServerSideProps as getWeatherData } from "@/fetchers/getWeatherData";
import { PagePropsTypes } from "@/types/PagePropsTypes";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function City(props: PagePropsTypes) {
    const router = useRouter();
    useEffect(() => {
        if (props.status === 404) {
            router.push("/404", undefined, { shallow: true });
        }
    });
    return (
        <>
            {props.status === 200 && props?.cityData && (
                <div>
                    <h1>{props.cityData.city}</h1>
                </div>
            )}
        </>
    );
}

export const getServerSideProps = getWeatherData;

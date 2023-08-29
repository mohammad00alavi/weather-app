import { fetchGeoCoordinates } from "@/fetchers/fetchGeoCoordinates";
import { useEffect, useState } from "react";

type Coordinates = {
    lat: number;
    lon: number;
};

const useCoordinates = (cityName: string) => {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const res = await fetchGeoCoordinates(cityName);
            return res;
        };
        getData().then((data) => {
            const location = data;

            if (location) {
                const coords: Coordinates = {
                    lat: location.lat,
                    lon: location.lon,
                };
                setCoordinates(coords);
            }

            setLoading(false);
        });
    }, [cityName]);

    if (loading) {
        return null;
    }

    return coordinates;
};

export default useCoordinates;

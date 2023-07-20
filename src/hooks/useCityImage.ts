import { useEffect, useState } from "react";
import { useLocation } from "./useLocation";
import { fetchPicture } from "@/fetchers/fetchPicture";

const useCityImage = () => {
    const [imgData, setImgData] = useState({
        url: "",
        description: "",
        color: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const { city } = useLocation<string>();
    useEffect(() => {
        if (city) {
            const getPicture = async () => {
                setIsLoading(true);
                const { imgSrc, description, color } = await fetchPicture(city);
                setImgData({
                    url: imgSrc,
                    description: description,
                    color: color,
                });
                setIsLoading(false);
            };

            getPicture();
        }
    }, []);
    return {
        isLoading,
        imgSrc: imgData.url,
        description: imgData.description,
        color: imgData.color,
    };
};

export default useCityImage;

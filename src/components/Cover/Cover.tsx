import { fetchPicture } from "@/fetchers/fetchPicture";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocation } from "@/hooks/useLocation";

const Cover = () => {
    const [imgUrl, setImgUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { city } = useLocation<string>();
    useEffect(() => {
        if (city) {
            const getPicture = async () => {
                setIsLoading(true);
                const url = await fetchPicture(city);
                setImgUrl(url);
                setIsLoading(false);
            };

            getPicture();
        }
    }, []);
    return (
        <>
            {!isLoading && (
                <Image
                    src={imgUrl}
                    alt={`${city}-picture`}
                    width={1920}
                    height={1080}
                    priority
                />
            )}
        </>
    );
};

export default Cover;

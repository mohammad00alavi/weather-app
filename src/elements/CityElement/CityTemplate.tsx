import useCityImage from "@/hooks/useCityImage";
import { ComponentWithChildren } from "@/types/ComponentWithChildren";
import React from "react";

const CityTemplate: React.FC<ComponentWithChildren> = ({ children }) => {
    const { imgSrc, isLoading } = useCityImage();
    return (
        <>
            {!isLoading && (
                <div
                    className="w-full h-full flex flex-col justify-between pt-20 md:pt-16"
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
};

export default CityTemplate;

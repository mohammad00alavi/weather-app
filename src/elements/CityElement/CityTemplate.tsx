import useCityImage from "@/hooks/useCityImage";
import { ComponentWithChildren } from "@/types/ComponentWithChildren";
import React from "react";

const CityTemplate: React.FC<ComponentWithChildren> = ({ children }) => {
    const { imgSrc, isLoading } = useCityImage();
    return (
        <>
            {!isLoading && (
                <div
                    className="w-full h-full flex flex-col justify-between pt-20 md:pt-16 relative"
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-teal-950 opacity-80 z-10" />
                    <div className="w-full h-full flex flex-col justify-between z-50">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default CityTemplate;

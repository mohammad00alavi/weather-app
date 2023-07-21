import useCityImage from "@/hooks/useCityImage";
import { ComponentWithChildren } from "@/types/ComponentWithChildren";
import React from "react";

const Layout: React.FC<ComponentWithChildren> = ({ children }) => {
    const { imgSrc, isLoading } = useCityImage();
    return (
        <>
            {!isLoading && (
                <div
                    className="w-6/12 h-96 m-auto mt-8"
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

export default Layout;

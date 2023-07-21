import useCityImage from "@/hooks/useCityImage";
import { ComponentWithChildren } from "@/types/ComponentWithChildren";
import React from "react";

const Layout: React.FC<ComponentWithChildren> = ({ children }) => {
    const { imgSrc, isLoading } = useCityImage();
    return (
        <>
            {!isLoading && (
                <div
                    className="max-w-screen-xl h-screen lg:h-[48rem] m-auto flex flex-col justify-between lg:rounded"
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

import useCityImage from "@/hooks/useCityImage";
import { ComponentWithChildren } from "@/types/ComponentWithChildren";
import { getContrastingColor } from "@/utils/getContrastingColor";
import React from "react";

const Layout: React.FC<ComponentWithChildren> = ({ children }) => {
    const { imgSrc, isLoading, color } = useCityImage();
    /* console.log(color, "colors");

    const textColor = getContrastingColor(color);
    console.log(textColor); */
    return (
        <>
            {!isLoading && (
                <div
                    className="w-6/12 h-96 m-auto mt-8"
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        /* color: textColor, */
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
};

export default Layout;

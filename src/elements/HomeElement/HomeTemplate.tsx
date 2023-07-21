import { ComponentWithChildren } from "@/types/ComponentWithChildren";
import React from "react";

const HomeTemplate: React.FC<ComponentWithChildren> = ({ children }) => {
    return (
        <div
            className="w-full h-full flex flex-col justify-center items-center relative "
            style={{
                background: `linear-gradient(90deg, rgba(1,79,93,1) 1%, rgba(9,105,121,1) 33%, rgba(0,212,255,1) 100%)`,
            }}
        >
            {children}
        </div>
    );
};

export default HomeTemplate;

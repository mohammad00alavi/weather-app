import { ComponentWithChildren } from "@/types/ComponentWithChildren";
import React from "react";

const Layout: React.FC<ComponentWithChildren> = ({ children }) => {
    return (
        <div className="max-w-screen-xl h-screen lg:h-[48rem] m-auto lg:rounded relative">
            {children}
        </div>
    );
};

export default Layout;

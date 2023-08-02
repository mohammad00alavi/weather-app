import { ComponentWithChildren } from "@/types/ComponentWithChildren";
import React from "react";

const Layout: React.FC<ComponentWithChildren> = ({ children }) => {
    return (
        <div className="max-w-screen-xl lg:max-w-full h-screen lg:h-screen m-auto lg:rounded relative">
            {children}
        </div>
    );
};

export default Layout;

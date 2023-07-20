import { AppProps } from "@/types/AppProps";
import React, { createContext } from "react";

export const AppContext = createContext({});
const Provider = <T extends object>({ children, appProps }: AppProps<T>) => {
    const value: T = { ...appProps };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Provider;

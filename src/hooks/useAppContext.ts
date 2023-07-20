import { AppContext } from "@/context/Provider";
import { useContext } from "react";

export const useAppContext = <T extends object>(): T => {
    return useContext(AppContext) as T;
};

import { SearchContext } from "@/context/SearchContext/Provider";
import { PlacePredicationsHookResult } from "@/types/PlacePredicationsHookResult";
import { useContext } from "react";

export const useSearch = (): PlacePredicationsHookResult => {
    return useContext(SearchContext) as PlacePredicationsHookResult;
};

import { usePlacePredictions } from "@/hooks/usePlacePredictions";
import React, { createContext } from "react";

interface Props {
    children: React.ReactNode;
}

export const SearchContext = createContext({});
const Provider = ({ children }: Props) => {
    const {
        inputText,
        setInputText,
        isModalOpen,
        setIsModalOpen,
        predictions: uniquePredictions,
        isPlacePredictionsLoading,
        handleInputChange,
    } = usePlacePredictions();
    return (
        <SearchContext.Provider
            value={{
                inputText,
                setInputText,
                isModalOpen,
                setIsModalOpen,
                predictions: uniquePredictions,
                isPlacePredictionsLoading,
                handleInputChange,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default Provider;

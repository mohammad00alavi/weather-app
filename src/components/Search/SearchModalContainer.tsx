import React from "react";
import SearchModal from "./SearchModal";
import { usePlacePredictions } from "@/hooks/usePlacePredictions";

const SearchModalContainer = () => {
    const {
        inputText,
        setInputText,
        isModalOpen,
        setIsModalOpen,
        predictions: uniquePredictions,
        isPlacePredictionsLoading,
    } = usePlacePredictions();

    return (
        <>
            {inputText &&
                isModalOpen &&
                (isPlacePredictionsLoading ? (
                    <p className="text-white p-4 bg-gray-500">loading...</p>
                ) : (
                    <SearchModal
                        closeModalHandler={() => setIsModalOpen(false)}
                        itemList={uniquePredictions}
                        searchClickHandler={() => setInputText("")}
                    />
                ))}
        </>
    );
};

export default SearchModalContainer;

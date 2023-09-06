import React from "react";
import SearchModal from "./SearchModal";
import { useSearch } from "@/hooks/useSearch";

const SearchModalContainer = () => {
    const {
        inputText,
        setInputText,
        isModalOpen,
        setIsModalOpen,
        predictions: uniquePredictions,
        isPlacePredictionsLoading,
    } = useSearch();

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

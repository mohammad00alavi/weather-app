import React from "react";
import SeachModalList, { SeachModalListProps } from "./SeachModalList";

interface SearchModalProps extends SeachModalListProps {
    closeModalHandler: () => void;
}

const SearchModal = ({
    itemList,
    searchClickHandler,
    closeModalHandler,
}: SearchModalProps) => {
    return (
        <div className="relative">
            <SeachModalList
                itemList={itemList}
                searchClickHandler={searchClickHandler}
            />
            <div
                className="absolute w-full h-screen bg-transparent z-50"
                onClick={closeModalHandler}
            />
        </div>
    );
};

export default SearchModal;

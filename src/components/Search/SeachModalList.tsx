import React from "react";
import { SearchModalItem } from "./SearchModalItem";

export interface SeachModalListProps {
    itemList: google.maps.places.AutocompletePrediction[];
    searchClickHandler: () => void;
}

const SeachModalList = ({
    itemList,
    searchClickHandler,
}: SeachModalListProps) => {
    return (
        <ul className="bg-gray-500">
            {itemList?.map((item) => (
                <SearchModalItem
                    href={item.structured_formatting.main_text}
                    key={item.place_id}
                    clickHandler={searchClickHandler}
                    text={item.description}
                />
            ))}
        </ul>
    );
};

export default SeachModalList;

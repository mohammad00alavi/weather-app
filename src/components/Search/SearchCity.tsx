import React from "react";
import { SearchFormProps } from "@/types/SearchFormProps";
import SearchModalContainer from "./SearchModalContainer";
import SearchForm from "./SearchForm";

const SearchCity: React.FC<SearchFormProps> = ({ onTestSubmit }) => {
    return (
        <div className="w-full m-auto absolute z-50">
            <SearchForm onTestSubmit={onTestSubmit} />
            <SearchModalContainer />
        </div>
    );
};

export default SearchCity;

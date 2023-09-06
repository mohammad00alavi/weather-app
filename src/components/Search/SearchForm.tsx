import { useSearch } from "@/hooks/useSearch";
import { SearchFormProps } from "@/types/SearchFormProps";
import { useRouter } from "next/router";
import React from "react";

const SearchForm = ({ onTestSubmit }: SearchFormProps) => {
    const { handleInputChange, inputText, setInputText } = useSearch();
    const router = useRouter();

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Only for passing the test
        if (onTestSubmit) {
            onTestSubmit({
                city: inputText.toLowerCase(),
            });
        }
        router.push(`/${inputText.toLowerCase()}`, undefined, {
            shallow: false,
        });
        setInputText("");
    };
    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-row justify-between w-full relative opacity-40"
        >
            <input
                aria-label="search"
                className="py-4 px-4 outline-none w-full"
                type="text"
                value={inputText}
                onChange={handleInputChange}
                required
                placeholder="Enter city name here... :)"
            />

            <button className="py-2 px-4 bg-white" type="submit">
                Search
            </button>
        </form>
    );
};

export default SearchForm;

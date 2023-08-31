import React, { useState } from "react";
import { useRouter } from "next/router";
import { CityInputProps } from "@/types/CityInputProps";

const CityInput: React.FC<CityInputProps> = ({ onTestSubmit }) => {
    const [inputText, setInputText] = useState("");
    const router = useRouter();
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Only for passig the test
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
        <div className="w-full m-auto absolute opacity-30 z-50">
            <form
                onSubmit={onSubmitHandler}
                className="flex flex-row justify-between w-full"
            >
                <input
                    aria-label="search"
                    className="py-4 px-4 outline-none w-full"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                    placeholder="Enter city name here... :)"
                />
                <button className="py-2 px-4 bg-white" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default CityInput;

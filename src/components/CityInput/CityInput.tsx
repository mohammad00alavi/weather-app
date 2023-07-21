import { useRouter } from "next/router";
import React, { useState } from "react";

export default function CityInput() {
    const [inputText, setInputText] = useState("");
    const router = useRouter();
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/${inputText.toLowerCase()}`, undefined, {
            shallow: false,
        });
    };

    return (
        <div className="w-full absolute opacity-50 z-50">
            <form onSubmit={onSubmitHandler} className="flex flex-row justify-between w-full">
                <input
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
}

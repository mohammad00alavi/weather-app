import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CityInputProps } from "@/types/CityInputProps";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Link from "next/link";

const CityInput: React.FC<CityInputProps> = ({ onTestSubmit }) => {
    const [inputText, setInputText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const {
        placesService,
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
    } = usePlacesService({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    });
    useEffect(() => {
        if (placePredictions && placePredictions.length)
            placesService?.getDetails({
                placeId: placePredictions[0].place_id,
            });
    }, [placePredictions]);
    const getUniquePredictions = (predictions) => {
        const seen = new Set();
        const englishRegex = /^[A-Za-z0-9 ,.'-]+$/;

        return predictions.filter((prediction) => {
            const mainText = prediction.structured_formatting.main_text;
            const isDuplicateOrNonEnglish =
                seen.has(mainText) || !englishRegex.test(mainText);

            seen.add(mainText);

            return !isDuplicateOrNonEnglish;
        });
    };
    const uniquePredictions = getUniquePredictions(placePredictions);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
        setIsModalOpen(true);
        getPlacePredictions({
            input: e.target.value,
            types: ["(cities)"],
            language: "en",
        });
    };

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
        <div className="w-full m-auto absolute z-50">
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
            {inputText &&
                isModalOpen &&
                (isPlacePredictionsLoading ? (
                    <p className="text-white p-4 bg-gray-500">loading...</p>
                ) : (
                    <div className="relative">
                        <ul className="bg-gray-500">
                            {uniquePredictions?.map((prediction) => (
                                <Link
                                    href={`/${prediction.structured_formatting.main_text.toLowerCase()}`}
                                    key={prediction.place_id}
                                    className="text-white"
                                    onClick={() => setInputText("")}
                                >
                                    <li className="text-white p-4 lg:p-2 border-b-[1px] border-gray-400">
                                        {prediction.description}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                        <div
                            className="absolute w-full h-screen bg-transparent z-50"
                            onClick={() => setIsModalOpen(false)}
                        />
                    </div>
                ))}
        </div>
    );
};

export default CityInput;

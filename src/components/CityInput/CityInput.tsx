import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CityInputProps } from "@/types/CityInputProps";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Link from "next/link";

const CityInput: React.FC<CityInputProps> = ({ onTestSubmit }) => {
    const [inputText, setInputText] = useState("");
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
        return predictions.filter((prediction) => {
            const isDuplicate = seen.has(
                prediction.structured_formatting.main_text
            );
            seen.add(prediction.structured_formatting.main_text);
            return !isDuplicate;
        });
    };
    const uniquePredictions = getUniquePredictions(placePredictions);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
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
                    onChange={handleInputChange}
                    required
                    placeholder="Enter city name here... :)"
                />

                <button className="py-2 px-4 bg-white" type="submit">
                    Search
                </button>
            </form>
            {isPlacePredictionsLoading ? (
                <p>loading...</p>
            ) : (
                <ul>
                    {uniquePredictions?.map((prediction) => (
                        <Link
                            href={`/${prediction.structured_formatting.main_text.toLowerCase()}`}
                            key={prediction.place_id}
                            className="text-white"
                        >
                            <li className="text-white">
                                {prediction.description}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CityInput;

import { PlacePredicationsHookResult } from "@/types/PlacePredicationsHookResult";
import { getUniquePredictions } from "@/utils/getUniquePredictions";
import React, { useEffect, useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export const usePlacePredictions = (): PlacePredicationsHookResult => {
    const [inputText, setInputText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            placesService?.getDetails(
                {
                    placeId: placePredictions[0].place_id,
                },
                (result, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        return;
                    }
                }
            );
    }, [placePredictions, placesService]);

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
    return {
        inputText,
        setInputText,
        isModalOpen,
        setIsModalOpen,
        predictions: uniquePredictions,
        handleInputChange,
        isPlacePredictionsLoading,
    };
};

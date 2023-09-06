export interface PlacePredicationsHookResult {
    inputText: string;
    setInputText: (value: string) => void;
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    predictions: google.maps.places.AutocompletePrediction[];
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isPlacePredictionsLoading: boolean;
}

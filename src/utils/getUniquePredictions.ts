export const getUniquePredictions = (
    predictions: google.maps.places.AutocompletePrediction[]
) => {
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

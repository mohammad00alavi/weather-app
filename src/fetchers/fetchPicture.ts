export const fetchPicture = async (city: string) => {
    const URL = `https://api.unsplash.com/search/photos?query=${city}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}&w=1920&h=1080`;
    try {
        const res = await fetch(URL);
        const data = await res.json();
        const picture = data.results[0];
        return {
            imgSrc: picture.urls.raw + "&w=1920&h=1080",
            description: picture.description,
            color: picture.color,
        };
    } catch (error) {
        throw new Error("Network error, please try again later.");
    }
};

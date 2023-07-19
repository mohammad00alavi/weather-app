import { useRouter } from "next/router";
import React, { useState } from "react";

export default function CityInput() {
    const [inputText, setInputText] = useState("");
    const router = useRouter();
    const onSubmitHandler = () => {
        router.push(`/${inputText.toLowerCase()}`, undefined, { shallow: true });
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

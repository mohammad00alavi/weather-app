import Link from "next/link";
import React from "react";

interface SearchModalItemProps {
    href: string;
    clickHandler: () => void;
    text: string;
}

export const SearchModalItem = ({
    href,
    clickHandler,
    text,
}: SearchModalItemProps) => {
    return (
        <Link
            href={`/${href.toLowerCase()}`}
            className="text-white"
            onClick={clickHandler}
        >
            <li className="text-white p-4 lg:p-2 border-b-[1px] border-gray-400">
                {text}
            </li>
        </Link>
    );
};

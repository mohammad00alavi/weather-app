import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <h1>404 - City Not Found</h1>
            <Link href={"/"}>Back to home</Link>
        </>
    );
}

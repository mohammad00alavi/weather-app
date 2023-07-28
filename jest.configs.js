module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    setupFilesAfterEnv: [
        "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect",
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    modulePaths: ["<rootDir>/src", "<rootDir>/components"],
};

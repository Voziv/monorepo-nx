/** @type {import('jest').Config} */
const config = {
    preset: "@shelf/jest-mongodb",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "json"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.json"
            }
        ]
    },
    testMatch: [
        "**/tests/*.+(spec|test).(ts|tsx|js)",
        "**/__tests__/**/*.+(spec|test).(ts|tsx|js)",
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/.artifacts/"
    ]
};

module.exports = config;


module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  snapshotResolver: "<rootDir>/src/test/snapshotResolver.js",
  collectCoverageFrom: ["<rootDir>/src/components/**/*.{js,ts,tsx}"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
  modulePathIgnorePatterns: ["<rootDir>/.vscode/", "<rootDir>/.next"],
};

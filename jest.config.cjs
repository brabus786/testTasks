/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/components/(.*)$": "<rootDir>/src/Components/$1",
    "^@/templates/(.*)$": "<rootDir>/src/Templates/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/(?!(camelcase-keys|map-obj)/)"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: [
    "**/__tests__/**/*.(ts|tsx|js)",
    "**/*.(test|spec).(ts|tsx|js)",
    "<rootDir>/__tests__/**/*.(ts|tsx|js)",
  ],
  roots: ["<rootDir>/src", "<rootDir>/__tests__"],
};


const dotenv = require('dotenv')
const results = dotenv.config({ path: `${__dirname}/.env.test` });

if (results.error) {
  throw results.error;
}

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(test|spec).ts"],
  moduleNameMapper:{
    "@/(.*)": "<rootDir>/src/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@api/(.*)": "<rootDir>/src/api/$1",
    "@util/(.*)": "<rootDir>/src/util/$1"
  },
  setupFiles: ["<rootDir>/test/setup.ts"]
};

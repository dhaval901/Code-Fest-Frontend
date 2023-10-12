// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    globals: { 'ts-jest': { tsConfig: 'tsconfig.json' } },
    testMatch: ['**/test/**/*.test.(ts|tsx)'],
    // ...
    passWithNoTests: true,
};


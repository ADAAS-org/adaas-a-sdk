import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,

    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        //  Base A-Concept Aliases
        "@adaas/a-sdk/a-concept/constants/(.*)": ["<rootDir>/src/constants/$1"],
        "@adaas/a-sdk/a-concept/entities/(.*)": ["<rootDir>/src/entities/$1"],
        "@adaas/a-sdk/a-concept/components/(.*)": ["<rootDir>/src/components/$1"],
        "@adaas/a-sdk/a-concept/commands/(.*)": ["<rootDir>/src/commands/$1"],
        "@adaas/a-sdk/a-concept/containers/(.*)": ["<rootDir>/src/containers/$1"],
        "@adaas/a-sdk/a-concept/context/(.*)": ["<rootDir>/src/context/$1"],


        "@adaas/a-sdk/types/(.*)": ["<rootDir>/src/types/$1"],
        "@adaas/a-sdk/helpers/(.*)": ["<rootDir>/src/helpers/$1"],
    }

};
export default config;
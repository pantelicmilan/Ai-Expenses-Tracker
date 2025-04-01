import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',  // koristi 'jsdom' ako testiraš u browser okruženju
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],  // Ako koristiš TypeScript, specifično za `.ts` fajlove
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // Putanja do tvog tsconfig fajla (ako je specifičan)
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Obavezno za TypeScript fajlove
  },
};

export default config;
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageThreshold: { // Установите пороги покрытия (по желанию)
    global: {
      branches: 80, // Минимальный % покрытия ветвлений
      functions: 80, // Минимальный % покрытия функций
      lines: 80, // Минимальный % покрытия строк
      statements: 80 // Минимальный % покрытия операторов
    }
  } 
}

export default createJestConfig(config)
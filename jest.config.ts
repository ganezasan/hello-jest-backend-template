export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  reporters: [
    "default",
    ['jest-junit', { outputDirectory: 'reports', outputName: 'jest-report.xml' }],
  ],
  collectCoverage: true,
  coverageReporters: ["text-summary", "html"],
  coverageDirectory: "reports/coverage",
}

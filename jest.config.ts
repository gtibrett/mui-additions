export default {
	coverageProvider: "v8",
	preset:           'ts-jest',
	testEnvironment:  'jsdom',
	
	transform: {
		'^.+\\.tsx?$': [
			"ts-jest", {
				useESM:   true,
				tsconfig: "tsconfig.json"
			}
		]
	},
	
	rootDir: 'src',
	
	moduleFileExtensions:       ['ts', 'tsx', 'js', 'jsx'],
	modulePaths:                ['<rootDir>'],
	setupFilesAfterEnv:         ['./setupTests.ts']
	
};

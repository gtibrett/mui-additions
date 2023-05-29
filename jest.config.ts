export default {
	coverageProvider: "v8",
	preset:           'ts-jest',
	testEnvironment:  'node',
	
	transform: {
		'^.+\\.tsx?$': [
			"ts-jest", {
				useESM: true
			}
		]
	},
	
	rootDir: 'src',
	
	extensionsToTreatAsEsm: ['.ts','.tsx']
};

import {resizeScreenSize} from './resizeScreenSize';

describe('resizeScreenSize.ts', () => {
	test('Screen Size: 500px', async () => {
		resizeScreenSize(500);
		
		expect(window.matchMedia('(max-width: 499px)').matches).toBe(false);
		expect(window.matchMedia('(max-width: 500px)').matches).toBe(true);
		expect(window.matchMedia('(max-width: 501px)').matches).toBe(true);
	});
});
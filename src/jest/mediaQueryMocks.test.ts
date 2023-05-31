import {resizeScreenSize, setDarkMode} from './mediaQueryMocks';

describe('mediaQueryMocks.ts', () => {
	test('Screen Size: 500px', async () => {
		resizeScreenSize(500);
		
		expect(window.matchMedia('(max-width: 499px)').matches).toBe(false);
		expect(window.matchMedia('(max-width: 500px)').matches).toBe(true);
		expect(window.matchMedia('(max-width: 501px)').matches).toBe(true);
	});
	
	test('Light Mode', async () => {
		setDarkMode(false);
		
		expect(window.matchMedia('(prefers-color-scheme: light)').matches).toBe(true);
		expect(window.matchMedia('(prefers-color-scheme: dark)').matches).toBe(false);
	});
	
	test('Dark Mode', async () => {
		setDarkMode(true);
		
		expect(window.matchMedia('(prefers-color-scheme: light)').matches).toBe(false);
		expect(window.matchMedia('(prefers-color-scheme: dark)').matches).toBe(true);
	});
	
	test('matchMedai Coverage', async () => {
		// Just for code coverage
		setDarkMode(true);
		const matchMedia = window.matchMedia('(prefers-color-scheme: light)');
		
		expect(matchMedia.dispatchEvent(undefined)).toBe(true);
		expect(matchMedia.addListener(undefined)).toBe(undefined);
		expect(matchMedia.removeListener(undefined)).toBe(undefined);
		expect(matchMedia.onchange(undefined)).toBe(undefined);
		expect(matchMedia.addEventListener('', undefined)).toBe(undefined);
		expect(matchMedia.removeEventListener('', undefined)).toBe(undefined);
	});
});
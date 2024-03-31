import {setDarkMode} from './setDarkMode';

describe('setDarkMode.ts', () => {
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
});
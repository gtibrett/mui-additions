import {setDarkMode} from './setDarkMode';

const noop = () => {
};

describe('createMatchMedia.ts', () => {
	test('matchMedai Coverage', async () => {
		// Just for code coverage
		setDarkMode(true);
		const matchMedia = window.matchMedia('(prefers-color-scheme: light)');
		
		expect(matchMedia.dispatchEvent(new Event('test'))).toBe(true);
		expect(matchMedia.addListener(noop)).toBe(undefined);
		expect(matchMedia.removeListener(noop)).toBe(undefined);
		expect(matchMedia.addEventListener('', noop)).toBe(undefined);
		expect(matchMedia.removeEventListener('', noop)).toBe(undefined);
	});
});
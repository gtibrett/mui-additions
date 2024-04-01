import createMatchMedia from './createMatchMedia';

export function setDarkMode(on: boolean) {
	window.matchMedia = createMatchMedia({'prefers-color-scheme': on ? 'dark' : 'light'});
}
import createMatchMedia from './createMatchMedia';

export function resizeScreenSize(width: number) {
	window.matchMedia = createMatchMedia({width});
}
import {render, RenderOptions} from '@testing-library/react';
import {testContainerForAccessibility, testForAccessibility} from './testForAccessibility';

const content = (alt?: string) => (
	<div>
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<img src="image.jpg" alt={alt}/>
	</div>
);

const containerFactory = (alt?: string) => async (options: RenderOptions) => {
	const {container} = render(content(alt), options);
	return container;
};

let log, warn;
describe('testForAccessibility.ts', () => {
	beforeAll(() => {
		log  = jest.spyOn(console, 'log').mockImplementation(() => null);
		warn = jest.spyOn(console, 'warn').mockImplementation(() => null);
	});
	
	afterAll(() => {
		log.mockReset();
		warn.mockReset();
	});
	
	testForAccessibility(content('alt text'));
	testForAccessibility(content(), undefined, 'log');
	
	testContainerForAccessibility(containerFactory('alt text'));
	testContainerForAccessibility(containerFactory(), undefined, 'log');
});
import {createTheme, Theme, ThemeProvider} from '@mui/material';
import {cleanup, render, RenderOptions} from '@testing-library/react';
import axe, {AxeResults} from 'axe-core';
import {PropsWithChildren, ReactElement} from 'react';
import {resizeScreenSize} from './mediaQueryMocks';

export type TestMode = 'test' | 'log';

const themeWrapperFactory = (theme: Theme) => ({children}: PropsWithChildren) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const getBreakpoints = (theme: Theme): number[] => {
	return Object.values(theme.breakpoints.values);
};

const testAssertions = (mode: TestMode, results: AxeResults) => {
	switch (mode) {
		case 'test':
			expect(results.violations.length).toBe(0);
			break;
		case 'log':
			results.violations.forEach(({nodes, ...violation}) => {
				console.warn('------------------------------');
				console.log(violation);
				console.log(nodes);
				console.warn('------------------------------');
			});
			expect(results.violations.length).toBeGreaterThanOrEqual(0);
			break;
	}
};

export function testForAccessibility(content: ReactElement, themes: Theme[] = [createTheme()], mode: TestMode = 'test') {
	describe('Accessibility', () => {
		afterEach(cleanup);
		
		beforeEach(() => {
			axe.configure({
				rules: [
					{
						id: 'wcag2a'
					}, {
						id: 'wcag2aa'
					}, {
						id: 'wcag2aaa'
					}
				]
			});
		});
		
		themes.forEach((theme, i) => {
			describe(`Theme: ${theme.palette.mode} (${i})`, () => {
				getBreakpoints(theme).forEach((size) => {
					test(`a11y check: ${size}px wide`, async () => {
						resizeScreenSize(size);
						
						const {container} = render(content, {wrapper: themeWrapperFactory(theme)});
						await axe.run(container)
						         .then(results => testAssertions(mode, results));
					});
				});
			});
		});
	});
}

type ContainerFactory<T extends Element | DocumentFragment = HTMLElement> = (options: RenderOptions) => Promise<T>;

export function testContainerForAccessibility(containerFactory: ContainerFactory, themes: Theme[] = [createTheme()], mode: TestMode = 'test') {
	describe('Accessibility', () => {
		afterEach(cleanup);
		
		beforeEach(() => {
			axe.configure({
				rules: [
					{
						id: 'wcag2a'
					}, {
						id: 'wcag2aa'
					}, {
						id: 'wcag2aaa'
					}
				]
			});
		});
		
		themes.forEach((theme, i) => {
			describe(`Theme: ${theme.palette.mode} (${i})`, () => {
				getBreakpoints(theme).forEach((size) => {
					test(`a11y check: ${size}px wide`, async () => {
						resizeScreenSize(size);
						
						const container = await containerFactory({wrapper: themeWrapperFactory(theme)});
						await axe.run(container)
						         .then(results => testAssertions(mode, results));
					});
				});
			});
		});
	});
}
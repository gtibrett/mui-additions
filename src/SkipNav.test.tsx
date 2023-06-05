import {act, render, screen} from '@testing-library/react';
import {testForAccessibility} from './jest';
import SkipNav from './SkipNav';

describe('SkipNav.tsx', () => {
	test('Render', async () => {
		render(<SkipNav selector="main"/>);
		expect(screen.getByText('Skip navigation')).toBeInTheDocument();
	});
	
	test('Render different title', async () => {
		render(<SkipNav selector="main">Goto Main Content</SkipNav>);
		expect(screen.getByText('Goto Main Content')).toBeInTheDocument();
	});
	
	test('Skip Nav', async () => {
		render(<>
				<SkipNav selector="main"/>
				<main id="main-content" tabIndex={0}>main content</main>
			</>
		);
		
		const skipNav = screen.getByText('Skip navigation');
		
		await act(() => {
			skipNav.click();
		});
		
		expect(screen.getByText('main content')).toHaveFocus();
	});
	
	test('Skip Nav unfound skip to', async () => {
		render(<>
				<SkipNav selector="footer"/>
				<main id="main-content" tabIndex={0}>main content</main>
			</>
		);
		
		const skipNav = screen.getByText('Skip navigation');
		
		await act(() => {
			skipNav.click();
		});
		
		expect(screen.getByText('main content')).not.toHaveFocus();
	});
	
	test('Skip Nav invalid skip to', async () => {
		const error = jest.spyOn(console, 'error').mockImplementation(() => {
		});
		
		render(<>
				<SkipNav selector="main-content"/>
				{/*@ts-ignore*/}
				<fake id="main-content" tabIndex={0}>main content</fake>
			</>
		);
		
		const skipNav = screen.getByText('Skip navigation');
		
		await act(() => {
			skipNav.click();
		});
		
		expect(screen.getByText('main content')).not.toHaveFocus();
		
		error.mockReset();
	});
	
	describe('a11y check', () => {
		testForAccessibility(
			<>
				<SkipNav selector="main"/>
				<main id="main-content" tabIndex={0}>main content</main>
			</>
		);
	});
});
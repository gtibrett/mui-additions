import {act, render, screen} from '@testing-library/react';
import {testForAccessibility} from './jest';
import SkipNav from './SkipNav';

describe('SkipNav.tsx', () => {
	test('Render', async () => {
		render(<SkipNav/>);
		expect(screen.getByText('Skip navigation')).toBeInTheDocument();
	});
	
	test('Render different title', async () => {
		render(<SkipNav>Goto Main Content</SkipNav>);
		expect(screen.getByText('Goto Main Content')).toBeInTheDocument();
	});
	
	test('Skip Nav', async () => {
		render(<>
				<SkipNav/>
				<main id="main-content" tabIndex={0}>main content</main>
			</>
		);
		
		const skipNav = screen.getByText('Skip navigation');
		
		await act(() => {
			skipNav.click();
		});
		
		expect(screen.getByText('main content')).toHaveFocus();
	});
	
	describe('a11y check', () => {
		testForAccessibility(
			<>
				<SkipNav/>
				<main id="main-content" tabIndex={0}>main content</main>
			</>
		);
	});
});
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {testForAccessibility} from './jest';
import Link from './Link';

describe('Link.tsx', () => {
	test('Plain Mui Link: render', async () => {
		render(<>
			<BrowserRouter>
				<Link href="/">Home</Link>
			</BrowserRouter>
		</>);
		
		expect(screen.getByText(/home/i)).toBeInTheDocument();
	});
	
	describe('Plain Mui Link: a11y', () => {
		testForAccessibility(
			<BrowserRouter>
				<Link href="/">Home</Link>
			</BrowserRouter>
		);
	});
	
	test('External Mui Link: render', async () => {
		render(<>
			<BrowserRouter>
				<Link href="/" target="_blank">Home</Link>
			</BrowserRouter>
		</>);
		
		expect(screen.getByText(/home/i)).toBeInTheDocument();
	});
	
	describe('External Mui Link: a11y', () => {
		testForAccessibility(
			<BrowserRouter>
				<Link href="/" target="_blank">Home</Link>
			</BrowserRouter>
		);
	});
});
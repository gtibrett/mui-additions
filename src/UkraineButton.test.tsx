import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {testForAccessibility} from './jest';
import UkraineButton from './UkraineButton';

describe('UkraineButton.tsx', () => {
	test('Render', async () => {
		render(<>
			<BrowserRouter>
				<UkraineButton/>
			</BrowserRouter>
		</>);
		
		expect(screen.getByLabelText(/Stand with Ukraine/i)).toBeInTheDocument();
	});
	
	describe('a11y check', () => {
		testForAccessibility(
			<BrowserRouter>
				<UkraineButton/>
			</BrowserRouter>
		);
	});
});
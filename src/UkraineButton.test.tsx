import {render, screen} from '@testing-library/react';
import {testForAccessibility} from './jest';
import UkraineButton from './UkraineButton';

describe('UkraineButton.tsx', () => {
	test('Render: Portal', async () => {
		render(<UkraineButton/>);
		
		expect(screen.getByLabelText(/Stand with Ukraine/i)).toBeInTheDocument();
	});
	
	test('Render: No Portal', async () => {
		render(<UkraineButton noPortal/>);
		
		expect(screen.getByLabelText(/Stand with Ukraine/i)).toBeInTheDocument();
	});
	
	describe('a11y check', () => {
		testForAccessibility(
			<UkraineButton/>
		);
	});
});
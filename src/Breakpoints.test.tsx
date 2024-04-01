import {createTheme} from '@mui/material';
import {act, render, screen} from '@testing-library/react';
import Breakpoints from './Breakpoints';
import {testForAccessibility} from './jest';

describe('Breakpoints.tsx', () => {
	test('Render', async () => {
		const {container} = render(<Breakpoints/>);
		expect(screen.getByText(/toggle breakpoints/i)).toBeInTheDocument();
		
		const button = screen.getByRole('checkbox');
		await act(() => {
			button.click();
		});
		
		const breakpoints = container.ownerDocument.getElementById('breakpoints');
		expect(breakpoints).toBeInTheDocument();
	});
	
	test('Render: Portal', async () => {
		const {container} = render(<>
			<div id="breakpoints-portal"/>
			<Breakpoints portalContainerId="breakpoints-portal"/>
		</>);
		expect(screen.getByText(/toggle breakpoints/i)).toBeInTheDocument();
		
		const button = screen.getByRole('checkbox');
		await act(() => {
			button.click();
		});
		
		const breakpoints = container.ownerDocument.getElementById('breakpoints');
		expect(breakpoints).toBeInTheDocument();
	});
	
	const themes = [
		createTheme(),
		createTheme({palette: {mode: 'dark'}})
	];
	
	testForAccessibility(<Breakpoints/>, themes);
});
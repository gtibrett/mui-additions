import {Button} from '@mui/material';
import {act, render, screen} from '@testing-library/react';
import React from 'react';
import {testForAccessibility} from './jest/';
import Tabs, {TabContent} from './Tabs';

const tabs: TabContent[] = [
	{
		id:      'first',
		label:   'First',
		content: <span>first tab content</span>
	},
	{
		id:      'second',
		label:   'Second',
		content: <span>second tab content</span>,
		disableGutters: true
	},
	{
		id:      'third',
		label:   'Third',
		content: <span>third tab content</span>
	}
];

describe('Tabs.tsx', () => {
	test('Render Tabs', async () => {
		render(<>
			<Tabs tabs={tabs} active="first"/>
		</>);
		
		expect(screen.getByText(/First/)).toBeInTheDocument();
		expect(screen.getByText(/Second/)).toBeInTheDocument();
		expect(screen.getByText(/Third/)).toBeInTheDocument();
	});
	
	test('Render Tabs: Primary Color', async () => {
		render(<>
			<Tabs tabs={tabs} active="first" color="primary"/>
		</>);
		
		expect(screen.getByText(/First/)).toBeInTheDocument();
		expect(screen.getByText(/Second/)).toBeInTheDocument();
		expect(screen.getByText(/Third/)).toBeInTheDocument();
	});
	
	test('Render Tabs: With Actions', async () => {
		render(<>
			<Tabs tabs={tabs.map(t=>({...t, actions: <Button>action</Button>}))} active="first" color="primary"/>
		</>);
		
		expect(screen.getByText(/First/)).toBeInTheDocument();
		expect(screen.getByText(/Second/)).toBeInTheDocument();
		expect(screen.getByText(/Third/)).toBeInTheDocument();
		expect(screen.getByText(/action/)).toBeInTheDocument();
	});
	
	test('Render Tabs: No Active', async () => {
		render(<>
			<Tabs tabs={tabs}/>
		</>);
		
		expect(screen.getByText(/First/)).toBeInTheDocument();
		expect(screen.getByText(/Second/)).toBeInTheDocument();
		expect(screen.getByText(/Third/)).toBeInTheDocument();
	});
	
	test('Change Active Tab', async () => {
		render(<>
			<Tabs tabs={tabs} active="first"/>
		</>);
		
		act(() => screen.getByText(/Second/).click());
		
		expect(screen.getByText(/First/)).toBeInTheDocument();
		expect(screen.getByText(/Second/)).toBeInTheDocument();
		expect(screen.getByText(/Third/)).toBeInTheDocument();
	});
	
	describe('a11y check', () => {
		testForAccessibility(<Tabs tabs={tabs} active="first"/>);
	});
});
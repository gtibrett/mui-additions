import type {Meta, StoryObj} from '@storybook/react';
import {MemoryRouter} from 'react-router-dom';
import GoogleAnalyticsProvider from './GoogleAnalyticsProvider';

const meta: Meta<typeof GoogleAnalyticsProvider> = {
	title:      'react-router/GoogleAnalyticsProvider',
	component:  GoogleAnalyticsProvider,
	tags:       ['autodocs'],
	decorators: [
		(Story) => <MemoryRouter><Story/></MemoryRouter>
	],
	args:       {
		trackingId: 'G-XXXXXX'
	},
	parameters: {
		docs: {
			description: {
				component: ``
			}
		}
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DocsOnly: Story = {};

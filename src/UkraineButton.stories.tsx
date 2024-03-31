import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';
import UkraineButton from './UkraineButton';

type Story = StoryObj<typeof UkraineButton>;

const meta = {
	title:      'MUI/UkraineButton',
	component:  UkraineButton,
	tags:       ['autodocs'],
	args:       {
		noPortal: true
	},
	parameters: {
		docs: {
			description: {
				component: "🇺🇦 I support Ukraine and its people. I sell t-shirts to raise money for the humanitarian effort. I advertise those facts on my sites."
			}
		}
	},
	render:     (props) => {
		return (
			<Box sx={{height: 56, width: 56, my: 0, mx: 'auto', position: 'relative'}}>
				<UkraineButton {...props}/>
			</Box>
		);
	}
} satisfies Meta<typeof UkraineButton>;

export default meta;

export const DocsOnly: Story = {};
import {Card, CardContent, Container} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';
import {DisabledArgType, MuiColorArgType} from './stories/constants';
import {LoremIpsum} from './stories/Mocks';
import Tabs from './Tabs';

type Story = StoryObj<typeof Tabs>;

const meta = {
	title:      'MUI/Tabs',
	component:  Tabs,
	tags:       ['autodocs'],
	argTypes:   {
		color:  {...MuiColorArgType, defaultValue: 'secondary'},
		active: DisabledArgType,
		tabs:   DisabledArgType
	},
	decorators: [
		(Story) => (
			<Container maxWidth="md">
				<Card variant="outlined">
					<CardContent>
						<Story/>
					</CardContent>
				</Card>
			</Container>
		)
	],
	args:       {
		active: 'tab-1',
		tabs:   [
			{
				id:      'tab-1',
				label:   'Tab 1',
				content: <LoremIpsum variant="body1"/>
			},
			{
				id:      'tab-2',
				label:   'Tab 2',
				content: <LoremIpsum variant="body2"/>
			},
			{
				id:      'tab-3',
				label:   'Tab 3',
				content: <LoremIpsum variant="caption"/>
			}
		]
	}
} satisfies Meta<typeof Tabs>;

export default meta;

export const Primary: Story = {
	args: {
		color: 'primary'
	}
};

export const Secondary: Story = {
	args: {
		color: 'secondary'
	}
};
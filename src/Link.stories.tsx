import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import Link from './Link';

type Story = StoryObj<typeof Link>;

const meta: Meta<typeof Link> = {
	title:      'MUI/Link',
	component:  Link,
	tags:       ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: "A MUI `Link` with more conspicuous `:hover` and `:focus` styling"
			}
		}
	},
	argTypes:   {
		children: {control: 'text'},
		color: {control: 'select', options: ['primary', 'secondary', 'inherit']}
	},
	args:       {
		onClick:  fn(),
		children: 'Link text'
	}
};

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
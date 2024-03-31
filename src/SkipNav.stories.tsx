import type {Meta, StoryObj} from '@storybook/react';
import SkipNav from './SkipNav';
import {DisabledArgType} from './stories/constants';

type Story = StoryObj<typeof SkipNav>;

const meta = {
	title:      'MUI/SkipNav',
	component:  SkipNav,
	tags:       ['autodocs'],
	render:     (props) => {
		return <>
			<SkipNav {...props} selector="main"/>
			<main>
				Main Content
			</main>
		</>;
	},
	args:       {
		selector: 'main'
	},
	parameters: {
		docs: {
			description: {
				component: "A visually hidden skip navigation link for the start of your page. Requires a focusable element to skip to, configurable via `selector` prop"
			}
		}
	},
	argTypes:   {
		selector: {control: 'text', description: 'CSS Selector'},
		children: DisabledArgType
	}
} satisfies Meta<typeof SkipNav>;

export default meta;

export const DocsOnly: Story = {};
import type {Meta, StoryObj} from '@storybook/react';
import Breakpoints from './Breakpoints';

const meta: Meta<typeof Breakpoints> = {
	title:      'MUI/Breakpoints',
	component:  Breakpoints,
	tags:       ['autodocs'],
	render:     (props) => (
		<>
			<div id="breakpoints-portal" style={{height: 200}}>
				<Breakpoints {...props}/>
			</div>
		</>
	),
	args:       {
		portalContainerId: 'breakpoints-portal'
	},
	parameters: {
		docs: {
			description: {
				component: `Breakpoints can be added inside your \`ThemeProvider\` to provide a visualization of breakpoints overlayed on your app, making responsive design much easier.

**Note:** This component should only be used in development.`
			}
		}
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DocsOnly: Story = {};

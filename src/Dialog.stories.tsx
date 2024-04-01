import type {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import Dialog, {DialogProps} from './Dialog';
import {DisabledArgType} from './stories/constants';
import {LoremIpsum, MaterialIcon} from './stories/Mocks';
import {Button} from './stories/ProxyComponents';

type Story = StoryObj<typeof Dialog>;

const ButtonWithDialog = ({children, closeIcon, ...props}: DialogProps) => {
	const [open, setOpen] = useState<boolean>(false);
	
	return <>
		<Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
		<Dialog {...props} closeIcon={closeIcon !== '<none>' ? <MaterialIcon icon={closeIcon as string}/> : undefined} open={open} onClose={() => setOpen(false)}>
			{children}
		</Dialog>
	</>;
};

const WithActionsComponent = ({children, closeIcon, ...props}: Omit<DialogProps, 'actions'>) => {
	const [open, setOpen] = useState<boolean>(false);
	
	const actions = (
		<>
			<Button variant="contained" onClick={() => setOpen(false)}>Save</Button>
			<Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
		</>
	);
	
	return <>
		<Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
		<Dialog {...props} closeIcon={closeIcon !== '<none>' ? <MaterialIcon icon={closeIcon as string}/> : undefined} open={open} actions={actions}>
			{children}
		</Dialog>
	</>;
};

const meta = {
	title:      'MUI/Dialog',
	component:  Dialog,
	tags:       ['autodocs'],
	parameters: {
		layout: 'centered',
		docs:   {
			description: {
				component: "An extension of MUI's Dialog with a built-in `closeIcon` prop for ensuring consistent visual close functionality."
			}
		}
	},
	args:       {
		closeIcon: 'close',
		children:  <LoremIpsum/>
	},
	argTypes:   {
		title:          {type: 'string'},
		titleSpacing:   {type: 'number', defaultValue: 2},
		closeIcon:      {
			options:      ['<none>', 'close', 'cancel'],
			defaultValue: 'close'
		},
		closeIconTitle: {type: 'string'},
		actions:        DisabledArgType,
		onClose:        DisabledArgType,
		children:       DisabledArgType
	}
	
} satisfies Meta<typeof Dialog>;

export default meta;

export const Closeable: Story = {
	args:   {
		title:          'Closeable Dialog',
		closeIcon:      'close',
		closeIconTitle: 'Close Dialog'
	},
	render: ButtonWithDialog
};

export const WithActions: Story = {
	args:   {
		title:     'Dialog with Actions',
		closeIcon: undefined
	},
	render: WithActionsComponent
};
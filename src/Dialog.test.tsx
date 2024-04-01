import {Link} from '@mui/material';
import {act, cleanup, render, RenderOptions, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useState} from 'react';
import Dialog from './Dialog';
import {testContainerForAccessibility} from './jest';

const MockDialogWithLink = ({withActions = false}: { withActions?: boolean }) => {
	const [open, setOpen] = useState<boolean>(false);
	
	return (
		<>
			<Link href="#" onClick={() => setOpen(true)}>test link</Link>
			<Dialog
				title="Dialog Title" closeIcon="X"
				open={open} onClose={() => setOpen(false)}
				actions={withActions ? <>actions</> : undefined}
			>
				dialog content
			</Dialog>
		</>
	);
};

describe('Dialog.tsx', () => {
	afterEach(cleanup);
	
	test('Render', async () => {
		render(<MockDialogWithLink/>);
		
		const linkEl = screen.getByText('test link');
		expect(linkEl).toBeInTheDocument();
		
		await act(() => {
			linkEl.click();
		});
		
		expect(screen.getByText('dialog content')).toBeVisible();
		
		const closeEl = screen.getByLabelText('close dialog');
		expect(closeEl).toBeInTheDocument();
		
		await act(() => {
			closeEl.click();
		});
		
		expect(screen.getByText('dialog content')).not.toBeVisible();
	});
	
	test('Render: with Actions', async () => {
		render(<MockDialogWithLink withActions/>);
		
		const linkEl = screen.getByText('test link');
		expect(linkEl).toBeInTheDocument();
		
		await act(() => {
			linkEl.click();
		});
		
		expect(screen.getByText('dialog content')).toBeVisible();
		
		const closeEl = screen.getByLabelText('close dialog');
		expect(closeEl).toBeInTheDocument();
		
		await act(() => {
			closeEl.click();
		});
		
		expect(screen.getByText('dialog content')).not.toBeVisible();
		expect(screen.getByText('actions')).not.toBeVisible();
	});
	
	test('Close with Escape key', async () => {
		const user = userEvent.setup();
		
		render(<MockDialogWithLink/>);
		
		const linkEl = screen.getByText('test link');
		expect(linkEl).toBeInTheDocument();
		
		await act(() => {
			linkEl.click();
		});
		
		expect(screen.getByText('dialog content')).toBeVisible();
		
		await user.keyboard('[Escape]');
		
		expect(screen.getByText('dialog content')).not.toBeVisible();
	});
	
	testContainerForAccessibility(
		async (options: RenderOptions) => {
			const {container} = render(
				<MockDialogWithLink/>,
				options
			);
			
			const linkEl = screen.getByText('test link');
			await act(() => {
				linkEl.click();
			});
			
			return container;
		}
	);
});
import {Dialog as MuiDialog, DialogContent, DialogContentProps, DialogProps as MuiDialogProps, DialogTitle, DialogTitleProps, Grid, GridProps, IconButton} from '@mui/material';
import {Dispatch, PropsWithChildren, ReactNode, SetStateAction} from 'react';

type DialogProps = Omit<MuiDialogProps, 'children'> & {
	title: DialogTitleProps['title'];
	closeIcon?: ReactNode;
	closeIconTitle?: string;
	setOpen: Dispatch<SetStateAction<MuiDialogProps['open']>>;
	children: DialogContentProps['children'];
	titleSpacing?: GridProps['spacing'];
};

export default function Dialog(props: PropsWithChildren<DialogProps>) {
	const {
		      title,
		      titleSpacing   = 2,
		      closeIcon,
		      closeIconTitle = 'close dialog',
		      setOpen,
		      children,
		      ...dialogProps
	      } = props;
	
	return (
		<MuiDialog {...dialogProps} onClose={() => setOpen(false)}>
			<DialogTitle>
				<Grid container spacing={titleSpacing} alignItems="center">
					<Grid item xs>{title}</Grid>
					{
						closeIcon &&
						<Grid item>
							<IconButton onClick={() => setOpen(false)} title={closeIconTitle}>
								{closeIcon}
							</IconButton>
						</Grid>
					}
				</Grid>
			</DialogTitle>
			<DialogContent dividers>
				{children}
			</DialogContent>
		</MuiDialog>
	);
}
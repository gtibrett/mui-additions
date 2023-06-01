import {Box, Fab, Portal, Tooltip, useTheme} from '@mui/material';

export default function UkraineButton() {
	const theme = useTheme();
	
	return (
		<Portal>
			<Box sx={{position: 'fixed', bottom: 0, right: 0, pr: 4, pb: 3, zIndex: theme.zIndex.fab + 1}}>
				<Tooltip title={<>We stand with Ukraine and its people.<br/>Show your support.</>} placement="left" arrow>
					<Fab
						aria-label="Stand with Ukraine"
						href="https://cottonbureau.com/p/SE43Q8/shirt/stand-with-ukraine"
						target="_blank"
						sx={{
							background: 'linear-gradient(0deg, #F7D748 0%, #F7D748 50%, #255AB5 50%, #255AB5 100%)',
							border:     `1px solid ${theme.palette.common.white}`
						}}>
					</Fab>
				</Tooltip>
			</Box>
		</Portal>
	);
}
import {Box, Portal, Snackbar, Switch, useTheme} from '@mui/material';
import {blueGrey} from '@mui/material/colors';
import React, {FC, useState} from 'react';

const useSx = () => {
	const theme = useTheme();
	
	return {
		pointerEvents: 'none',
		position:      'fixed',
		top:           0,
		left:          0,
		height:        '100%',
		width:         '100%',
		zIndex:        theme.zIndex.appBar + 10000,
		overflow:      'hidden'
	};
};

const Breakpoints: FC = () => {
	const sx              = useSx();
	const theme           = useTheme();
	const [show, setShow] = useState<boolean>(false);
	
	const max = Math.max(...Object.values(theme.breakpoints.values));
	
	const shade     = theme.palette.mode === 'light' ? 600 : 100;
	const color     = blueGrey[shade];
	const textColor = blueGrey[shade];
	
	return (
		<Portal>
			<Box id="breakpoints" sx={{...sx, display: show ? 'block' : 'none'}}>
				<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${max + 22} 1000`} style={{width: max + 22}}>
					{Object.entries(theme.breakpoints.values).map(([key, value]) => (
						<React.Fragment key={key}>
							<line x1={value} x2={value} y1="0" y2="100%" stroke={color} strokeDasharray={2.5}/>
							<text x={value + 2} y={20} fill={textColor} stroke={textColor} fontSize={14}>
								{key}
							</text>
						</React.Fragment>
					))}
				</svg>
			</Box>
			<Snackbar
				open
				anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
				message={<label id="toggle-breakpoints">Toggle Breakpoints</label>}
				action={<Switch inputProps={{'aria-labelledby': 'toggle-breakpoints'}} size="small" color="secondary" onClick={() => setShow(cur => !cur)}/>}
			/>
		
		</Portal>
	);
};

export default Breakpoints;
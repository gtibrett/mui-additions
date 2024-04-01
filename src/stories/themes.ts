import {createTheme} from '@mui/material';
import {blue, blueGrey, pink} from '@mui/material/colors';

const generateTheme = (overrideMode?: 'light' | 'dark') => {
	const prefersDarkMode = overrideMode !== 'light';
	const spacing         = 8;
	const primary         = blue;
	const secondary       = pink;
	
	const background = {
		paper:   prefersDarkMode ? blueGrey[900] : '#fff',
		default: prefersDarkMode ? blueGrey[800] : blueGrey[50]
	};
	
	return createTheme({
		spacing,
		palette: {
			contrastThreshold: 4.5,
			mode:              prefersDarkMode ? 'dark' : 'light',
			primary:           {
				main: primary[prefersDarkMode ? 200 : 700]
			},
			secondary:         {
				main: secondary[prefersDarkMode ? 200 : 700]
			},
			background
		}
	});
};

export const lightTheme = generateTheme('light');
export const darkTheme  = generateTheme('dark');
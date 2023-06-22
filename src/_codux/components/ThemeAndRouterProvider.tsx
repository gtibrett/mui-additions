import {createTheme, ThemeProvider} from '@mui/material';
import {blue, pink} from '@mui/material/colors';
import {PropsWithChildren} from 'react';
import {MemoryRouter} from 'react-router';

const theme = createTheme({
	palette:     {
		primary:   blue,
		secondary: pink
	},
	breakpoints: {
		values: {
			xs: 320,
			sm: 480,
			md: 640,
			lg: 960,
			xl: 1024
		}
	}
});
export default function ThemeAndRouterProvider({children}: PropsWithChildren) {
	return (
		<MemoryRouter>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</MemoryRouter>
	);
}
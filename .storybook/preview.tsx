import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import './material-font.css';

import {CssBaseline, ThemeProvider} from '@mui/material';
import {withThemeFromJSXProvider} from '@storybook/addon-themes';
import type {Preview} from "@storybook/react";
import {darkTheme, lightTheme} from '../src/stories/themes';

const themes = {
	light: lightTheme,
	dark:  darkTheme
};

const preview: Preview = {
	parameters: {
		controls:    {
			matchers: {
				color: /(background|color)$/i,
				date:  /Date$/i
			}
		},
		docs:        {
			source: {type: 'dynamic', language: 'tsx'}
		},
		backgrounds: {disable: true}
	},
	
	decorators: [
		withThemeFromJSXProvider({
			GlobalStyles: CssBaseline,
			Provider:     ThemeProvider,
			themes:       {
				light: lightTheme,
				dark:  darkTheme
			},
			defaultTheme: 'light'
		})
	]
};

export default preview;

import {blue, blueGrey, deepOrange} from '@mui/material/colors';
import {create} from '@storybook/theming/create';

const logo = require('./@gtibrett.png');

const theme = create({
	base:        'light',
	brandTitle:  '@gtibrett/mui-additions',
	brandUrl:    'https://github.com/gtibrett/mui-additions',
	brandImage:  logo,
	brandTarget: '_self',
	
	// Typography
	fontBase: '"Roboto", sans-serif',
	fontCode: 'monospace',
	
	colorPrimary:      blueGrey[800],
	colorSecondary:    deepOrange[700],
	
	appBg:             blueGrey[100],
	appContentBg:      '#FFF',
	appPreviewBg:      '#FFF',
	// appBorderColor:    blueGrey[700],
	appBorderRadius:   4,
	
	textColor:         blueGrey[900],
	textInverseColor:  blueGrey[900],
	textMutedColor:    blueGrey[700],
	
	// toolbars
	barTextColor:      blueGrey[900],
	barHoverColor:     blue[500],
	barSelectedColor:  blue[900],
	barBg:             blueGrey[50],
	
	// Button
	buttonBg:          deepOrange[700],
	buttonBorder:      deepOrange[700],
	booleanBg:         blueGrey[100],
	booleanSelectedBg: deepOrange[700],
	
	// inputBg:           blueGrey[50],
	// inputBorder:       blueGrey[200],
	// inputTextColor:    blueGrey[900],
	// inputBorderRadius: 4
});

export default theme;
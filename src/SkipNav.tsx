import {alpha, Link, SxProps, useTheme} from '@mui/material';
import {visuallyHidden} from '@mui/utils';
import {MouseEventHandler, PropsWithChildren} from 'react';

const handleSkip: MouseEventHandler<HTMLAnchorElement> = (ev) => {
	ev.preventDefault();
	ev.currentTarget.blur();
	
	document.querySelector('main')?.focus();
};

export type SkipNavProps = PropsWithChildren;

export default function SkipNav({children = 'Skip navigation'}: SkipNavProps) {
	const theme       = useTheme();
	const sx: SxProps = {
		'&:not(:focus)': {...visuallyHidden},
		'&:focus':       {
			position:   'absolute',
			top:        0,
			left:       0,
			right:      0,
			background: alpha(theme.palette.background.paper, .9),
			p:          2.5,
			zIndex:     theme.zIndex.fab + 1,
			textAlign:  'center'
		}
	};
	
	return (
		<Link sx={sx} onClick={handleSkip} href="#">{children}</Link>
	);
}
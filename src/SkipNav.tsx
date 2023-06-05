import {alpha, Link, SxProps, useTheme} from '@mui/material';
import {visuallyHidden} from '@mui/utils';
import {MouseEventHandler, PropsWithChildren} from 'react';

export type SkipNavProps = PropsWithChildren<{
	selector: Parameters<typeof document.querySelector>[0]
}>;

export default function SkipNav({children = 'Skip navigation', selector}: SkipNavProps) {
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
	
	const handleSkip: MouseEventHandler<HTMLAnchorElement> = (ev) => {
		ev.preventDefault();
		ev.currentTarget.blur();
		
		const skipTo = document.querySelector<HTMLElement>(selector);
		skipTo?.focus();
	};
	
	return (
		<Link sx={sx} onClick={handleSkip} href="#">{children}</Link>
	);
}
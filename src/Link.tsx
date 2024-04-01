import {Link as MuiLink, LinkProps as MuiLinkProps, useTheme} from '@mui/material';
import {FC} from 'react';

const Link: FC<MuiLinkProps> = ({sx = {}, color = 'secondary', ...props}) => {
	const theme          = useTheme();
	const selectectColor = (() => {
		switch (color) {
			case 'primary':
				return theme.palette.primary;
			case 'secondary':
				return theme.palette.secondary;
			case 'inherit':
			default:
				return undefined;
		}
	})();
	
	const a11ySx = {
		...sx,
		...(selectectColor ? ({
			px:                 .25,
			'&:hover, &:focus': {
				background:   selectectColor.main,
				color:        theme.palette.background.paper,
				outlineStyle: 'solid',
				outlineColor: selectectColor.main,
				outlineWidth: 2,
				cursor:       'pointer'
			}
		}) : {})
	};
	
	return <MuiLink color={color} {...props} sx={a11ySx}/>;
};

export default Link;
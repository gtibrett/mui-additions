import {Typography, TypographyProps} from '@mui/material';

export const LoremIpsum = (props: Omit<TypographyProps, 'children'>) => (
	<Typography {...props}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec posuere nisi, non sodales dui. Maecenas dapibus turpis neque, non varius mi tincidunt sed. In tristique laoreet nibh, vel hendrerit dolor dictum vel. Aenean sed.</Typography>
);

export const MaterialIcon = ({icon}: { icon: string }) => <span className="material-icons">{icon}</span>;
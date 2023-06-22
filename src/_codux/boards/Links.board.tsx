import {Grid} from '@mui/material';
import {createBoard} from '@wixc3/react-board';
import Link from '../../Link';
import ThemeAndRouterProvider from '../components/ThemeAndRouterProvider';

export default createBoard({
	name:  'Links',
	Board: () => (
		<div>
			<ThemeAndRouterProvider>
				<Grid container spacing={2}>
					<Grid item>
						<Link to="/somewhere">Somewhere</Link>
					</Grid>
					<Grid item>
						<Link to="/primary" color="primary">Primary</Link>
					</Grid>
					<Grid item>
						<Link to="/primary" color="secondary">Secondary</Link>
					</Grid>
					<Grid item>
						<Link href="http://somewhere.com">somewhere.com</Link>
					</Grid>
				</Grid>
			</ThemeAndRouterProvider>
		</div>
	)
});

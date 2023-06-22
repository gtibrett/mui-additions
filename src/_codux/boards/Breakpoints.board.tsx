import {createBoard} from '@wixc3/react-board';
import Breakpoints from '../../Breakpoints';
import ThemeAndRouterProvider from '../components/ThemeAndRouterProvider';

export default createBoard({
	name:  'Breakpoints',
	Board: () => (
		<div style={{width: 600}}>
			<ThemeAndRouterProvider>
				<Breakpoints open/>
			</ThemeAndRouterProvider>
		</div>
	)
});
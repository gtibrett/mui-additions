import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactGA from 'react-ga4';
import {MemoryRouter} from 'react-router-dom';
import GoogleAnalyticsProvider from './GoogleAnalyticsProvider';
import Link from './Link';
import LinkBehavior from './LinkBehavior';

const GA_TRACKING_ID: string | undefined = 'G-ABCDEFGHI9';

describe('GoogleAnalyticsProvider.tsx', () => {
	const initialize = jest.spyOn(ReactGA, 'initialize').mockImplementation(() => null);
	
	afterEach(() => initialize.mockReset());
	
	test('Provider', async () => {
		render(
			<MemoryRouter>
				<GoogleAnalyticsProvider trackingId={GA_TRACKING_ID}>
					<span>test</span>
				</GoogleAnalyticsProvider>
			</MemoryRouter>
		);
		
		expect(screen.getByText(/test/i)).toBeInTheDocument();
		expect(initialize).toHaveBeenCalledWith(GA_TRACKING_ID);
	});
	
	test('No Tracking Id', async () => {
		render(
			<MemoryRouter>
				<GoogleAnalyticsProvider trackingId={undefined}>
					<span>test</span>
				</GoogleAnalyticsProvider>
			</MemoryRouter>
		);
		
		expect(screen.getByText(/test/i)).toBeInTheDocument();
		expect(initialize).toHaveBeenCalledTimes(0);
	});
	
	test('Page Change', async () => {
		const user = userEvent.setup();
		const event = jest.spyOn(ReactGA, 'event');
		render(
			<MemoryRouter>
				<GoogleAnalyticsProvider trackingId={GA_TRACKING_ID}>
					<Link component={LinkBehavior} href="/test">test</Link>
				</GoogleAnalyticsProvider>
			</MemoryRouter>
		);
		
		const link = screen.getByText('test');
		await user.click(link);
		
		expect(event).toHaveBeenCalledTimes(2);
		expect(event).toHaveBeenCalledWith('page_view', {
			page_location: `http://localhost/test`
		});
		
		event.mockReset();
	});
});
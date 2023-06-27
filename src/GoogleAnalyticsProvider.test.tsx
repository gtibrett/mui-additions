import {act, render, screen} from '@testing-library/react';
import ReactGA from 'react-ga4';
import {BrowserRouter} from 'react-router-dom';
import GoogleAnalyticsProvider from './GoogleAnalyticsProvider';
import Link from './Link';

const GA_TRACKING_ID: string | undefined = 'G-ABCDEFGHI9';

let initialize;
describe('GoogleAnalyticsProvider.tsx', () => {
	beforeEach(() => {
		initialize = jest.spyOn(ReactGA, 'initialize').mockImplementation(() => null);
	});
	
	afterEach(() => initialize.mockReset());
	
	test('Provider', async () => {
		render(
			<BrowserRouter>
				<GoogleAnalyticsProvider trackingId={GA_TRACKING_ID}>
					<span>test</span>
				</GoogleAnalyticsProvider>
			</BrowserRouter>
		);
		
		expect(screen.getByText(/test/i)).toBeInTheDocument();
		expect(initialize).toHaveBeenCalledWith(GA_TRACKING_ID);
	});
	
	test('No Tracking Id', async () => {
		render(
			<BrowserRouter>
				<GoogleAnalyticsProvider trackingId={undefined}>
					<span>test</span>
				</GoogleAnalyticsProvider>
			</BrowserRouter>
		);
		
		expect(screen.getByText(/test/i)).toBeInTheDocument();
		expect(initialize).toHaveBeenCalledTimes(0);
	});
	
	test('Page Change', async () => {
		const event = jest.spyOn(ReactGA, 'event');
		render(
			<BrowserRouter>
				<GoogleAnalyticsProvider trackingId={GA_TRACKING_ID}>
					<Link to="/test">test</Link>
				</GoogleAnalyticsProvider>
			</BrowserRouter>
		);
		
		const link = screen.getByText('test');
		await act(() => {
			link.click();
		});
		
		expect(event).toHaveBeenCalledTimes(2);
		expect(event).toHaveBeenCalledWith('page_view', {
			page_location: `http://localhost/test`
		});
		
		event.mockReset();
	});
});
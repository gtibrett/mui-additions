import {PropsWithChildren, useEffect} from 'react';
import ReactGA from 'react-ga4';
import {useLocation} from 'react-router';

type GoogleAnalyticsProviderProps = {
	trackingId: string | undefined;
}

export default function GoogleAnalyticsProvider({children, trackingId}: PropsWithChildren<GoogleAnalyticsProviderProps>) {
	const location = useLocation();
	
	useEffect(() => {
		if (trackingId) {
			ReactGA.initialize(trackingId);
		}
	}, []);
	
	useEffect(() => {
		if (trackingId) {
			ReactGA.event('page_view', {
				page_location: `${window.location.origin}${location.pathname}`
			});
		}
	}, [location.pathname]);
	
	return <>{children}</>;
};
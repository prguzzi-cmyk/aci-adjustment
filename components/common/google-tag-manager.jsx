import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtag from '../../lib/gtm';

const handleRouteChange = (url) => {
	gtag.pageView(url);
};

const GoogleTagManager = ({ children }) => {
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return children;
};

export default GoogleTagManager;

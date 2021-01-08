export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const pageView = (url) => {
	window.gtag('config', GTM_ID, {
		page_path: url,
	});
};

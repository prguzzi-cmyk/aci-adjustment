import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

import IntroSection from '../components/contact-us/intro';
import ContactFormSection from '../components/contact-us/contact-form';
import MapSection from '../components/contact-us/map';

import '../styles/modules/contact-us.less';

export default function ContactUs() {
	const LayoutConfig = {
		title: dataset.router.contact.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.contact.label,
		},
		breadcrumb: [dataset.router.contact],
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<ContactFormSection />
			<MapSection />
		</Layout>
	);
}

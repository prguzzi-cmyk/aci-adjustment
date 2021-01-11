import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

import IntroSection from '../components/contact-us/intro';
import ContactFormSection from '../components/contact-us/form';
import MapSection from '../components/contact-us/map';

import '../styles/modules/contact-us.less';

export default function ContactUs() {
	const LayoutConfig = {
		title: dataset.router.contact.label,
		description: `Visit us at ${dataset.general.address} or call us on ${dataset.general.phoneFormatted} for your detailed inquiries.`,
		banner: {
			image: dataset.images.bannerContactUs,
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

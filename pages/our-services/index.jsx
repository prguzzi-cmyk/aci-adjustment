import Layout from '../../layouts/default';
import dataset from '../../utils/datasets/bootstrap';

import StepsSection from '../../components/our-services/steps-section';
import ServicesSection from '../../components/common/sections/services';
import InspectionFormSection from '../../components/common/sections/inspection-form';

require('../../styles/modules/our-services.less');

export default function OurServices() {
	const LayoutConfig = {
		title: 'Public Adjuster near you',
		description:
			'ACI Adjustment Group Inc. in Newtown, PA, offers an easy 3-step property claim process! Contact us to speak to one of our insurance claim adjusters today!',
		banner: {
			image: dataset.images.bannerOurServices,
			title: 'Public Adjuster near you',
		},
		breadcrumb: [dataset.router.services],
		className: dataset.router.services.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<StepsSection />
			<ServicesSection />
			<InspectionFormSection />
		</Layout>
	);
}

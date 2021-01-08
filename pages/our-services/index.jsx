import Layout from '../../layouts/default';
import dataset from '../../utils/datasets/bootstrap';

import StepsSection from '../../components/our-services/steps-section';
import ServicesSection from '../../components/common/sections/services';
import InspectionFormSection from '../../components/common/sections/inspection-form';

import '../../styles/modules/our-services.less';

export default function OurServices() {
	const LayoutConfig = {
		title: 'Claims Services For Property Disasters',
		description:
			'Your advocate for insurance claim for all kind of natural and accidental disasters in Pennsylvania. We will help you for a free damage evaluation and get your claim from the companies.',
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.services.label,
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

import Layout from '../../layouts/default';
import dataset from '../../utils/datasets/bootstrap';

import StepsSection from '../../components/our-services/steps-section';
import InspectionFormSection from '../../components/common/sections/inspection-form';

import '../../styles/modules/our-services.less';

export default function OurServices() {
	const LayoutConfig = {
		title: dataset.router.services.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.services.label,
		},
		breadcrumb: [dataset.router.services],
	};

	return (
		<Layout {...LayoutConfig}>
			<StepsSection />
			<InspectionFormSection />
		</Layout>
	);
}

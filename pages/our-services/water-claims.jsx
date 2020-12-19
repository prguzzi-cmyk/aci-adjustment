import Layout from '../../layouts/default';
import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/claims/water/intro';
import FaqSection from '../../components/claims/water/faq';
import DamageSection from '../../components/claims/water/damage';
import AskExpertsSection from '../../components/common/sections/ask-experts-form';

import '../../styles/modules/claims/water.less';

export default function WaterClaims() {
	const LayoutConfig = {
		title: dataset.router.claimWater.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.claimWater.label,
		},
		breadcrumb: [dataset.router.services, dataset.router.claimWater],
		className: dataset.router.claimWater.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FaqSection />
			<DamageSection />
			<AskExpertsSection title={dataset.router.claimWater.label} />
		</Layout>
	);
}

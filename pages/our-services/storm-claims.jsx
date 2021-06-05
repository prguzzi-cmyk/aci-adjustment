import Layout from '../../layouts/default';
import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/claims/storm/intro';
import FaqSection from '../../components/claims/storm/faq';
import DamageSection from '../../components/claims/storm/damage';
import AskExpertsSection from '../../components/common/sections/ask-experts-form';

require('../../styles/modules/claims/storm.less');

export default function StormClaims() {
	const LayoutConfig = {
		title: dataset.router.claimStorm.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.claimStorm.label,
		},
		breadcrumb: [dataset.router.services, dataset.router.claimStorm],
		className: dataset.router.claimStorm.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FaqSection />
			<DamageSection />
			<AskExpertsSection title={dataset.router.claimStorm.label} />
		</Layout>
	);
}

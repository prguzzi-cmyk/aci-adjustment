import Layout from '../../layouts/default';
import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/claims/commercial/intro';
import FaqSection from '../../components/claims/commercial/faq';
import DamageSection from '../../components/claims/commercial/damage';
import AskExpertsSection from '../../components/common/sections/ask-experts-form';

import '../../styles/modules/claims/commercial.less';

export default function CommercialClaims() {
	const LayoutConfig = {
		title: dataset.router.claimCommercial.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.claimCommercial.label,
		},
		breadcrumb: [dataset.router.services, dataset.router.claimCommercial],
		className: dataset.router.claimCommercial.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FaqSection />
			<DamageSection />
			<AskExpertsSection title={dataset.router.claimCommercial.label} />
		</Layout>
	);
}

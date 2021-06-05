import Layout from '../../layouts/default';
import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/claims/fire/intro';
import FaqSection from '../../components/claims/fire/faq';
import DamageSection from '../../components/claims/fire/damage';
import AskExpertsSection from '../../components/common/sections/ask-experts-form';
import FireResourcesSection from '../../components/claims/fire/fire-resources';

require('../../styles/modules/claims/fire.less');

export default function FireClaims() {
	const LayoutConfig = {
		title: dataset.router.claimFire.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.claimFire.label,
		},
		breadcrumb: [dataset.router.services, dataset.router.claimFire],
		className: dataset.router.claimFire.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FaqSection />
			<DamageSection />
			<AskExpertsSection title={dataset.router.claimFire.label} />
			<FireResourcesSection />
		</Layout>
	);
}

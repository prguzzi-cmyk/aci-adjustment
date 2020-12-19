import Layout from '../../layouts/default';
import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/claims/common/intro';
import FaqSection from '../../components/claims/common/faq';
import DamageSection from '../../components/claims/common/damage';
import AskExpertsSection from '../../components/common/sections/ask-experts-form';

import '../../styles/modules/claims/common.less';

export default function CommonClaims() {
	const LayoutConfig = {
		title: dataset.router.claimCommon.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.claimCommon.label,
		},
		breadcrumb: [dataset.router.services, dataset.router.claimCommon],
		className: dataset.router.claimCommon.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FaqSection />
			<DamageSection />
			<AskExpertsSection title={dataset.router.claimCommon.label} />
		</Layout>
	);
}

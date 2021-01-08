import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/tools/file-a-claim/intro';
import FormSection from '../../components/common/sections/file-a-claim-form';

import '../../styles/modules/tools/file-a-claim.less';

export default function FileClaim() {
	const LayoutConfig = {
		title: 'File Your Claim Today',
		description:
			'File your claim with the help of ACI Adjustment Group in Pennsylvania. Customer friendly services with all the documentation. We make the process as easy as 1, 2, 3! Contact us for details.',
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.fileClaim.label,
		},
		breadcrumb: [dataset.router.tools, dataset.router.fileClaim],
		className: dataset.router.fileClaim.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FormSection />
		</Layout>
	);
}

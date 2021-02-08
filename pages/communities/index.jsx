import Layout from '../../layouts/default';

import { getStates, getCounties, getCommunities } from '../../lib/dynamo-db';

import CommunitiesSection from '../../components/communities/communities';

import dataset from '../../utils/datasets/bootstrap';

import '../../styles/modules/communities.less';

export default function Communities({ states, counties, communities }) {
	const LayoutConfig = {
		title: 'Communities',
		description: 'Communities we cover',
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.communities.label,
		},
		breadcrumb: [dataset.router.communities],
		className: dataset.router.communities.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<CommunitiesSection
				states={states}
				counties={counties}
				communities={communities}
			/>
		</Layout>
	);
}

export async function getStaticProps() {
	const states = await getStates();
	// const counties = await getCounties(process.env.DEF_STATE);
	const counties = await getCounties('States');
	// const communities = await getCommunities(process.env.DEF_COUNTY);
	const communities = await getCommunities('bucks');

	return {
		props: {
			states: states.Items,
			counties: counties.Items,
			communities: communities.Items,
		},
	};
}

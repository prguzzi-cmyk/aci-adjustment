import Layout from '../../layouts/default';

import DynamoDb from '../../lib/dynamo-db';

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
	const dynamoDb = new DynamoDb(process.env.AWS_REGION);

	const states = await dynamoDb.getStates(process.env.TBL_STATES);
	const counties = await dynamoDb.getCounties(
		process.env.TBL_COUNTIES,
		process.env.IND_STATE,
		process.env.DEF_STATE
	);
	const communities = await dynamoDb.getCommunities(
		process.env.TBL_COMMUNITIES,
		process.env.IND_COUNTY,
		process.env.DEF_COUNTY
	);

	return {
		props: {
			states: states.Items,
			counties: counties.Items,
			communities: communities.Items,
		},
	};
}

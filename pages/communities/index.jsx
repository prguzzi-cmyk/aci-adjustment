import Layout from '../../layouts/default';

import dynamoDb from '../../lib/dynamo-db';

import CommunitiesSection from '../../components/communities/communities';

import dataset from '../../utils/datasets/bootstrap';
import { uCase } from '../../utils/functions';

import '../../styles/modules/communities.less';

export default function Communities({ county, communities }) {
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
			<CommunitiesSection county={county} communities={communities} />
		</Layout>
	);
}

export async function getStaticProps() {
	// const counties = await dynamoDb.query({
	// 	TableName: process.env.TBL_COMMUNITY,
	// 	IndexName: process.env.IND_STATE,
	// 	KeyConditionExpression: 'StateSlug = :state',
	// 	ExpressionAttributeValues: {
	// 		':state': { S: 'pennsylvania' },
	// 	},
	// });

	const communities = await dynamoDb.query({
		TableName: process.env.TBL_COMMUNITY,
		IndexName: process.env.IND_COUNTY,
		KeyConditionExpression: 'CountySlug = :county',
		ExpressionAttributeValues: {
			':county': { S: process.env.DEF_COUNTY },
		},
	});

	return {
		props: {
			county: uCase(process.env.DEF_COUNTY),
			communities: communities.Items,
		},
	};
}

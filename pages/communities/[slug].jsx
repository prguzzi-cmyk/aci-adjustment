import { useRouter } from 'next/router';

import Layout from '../../layouts/community';

import dataset from '../../utils/datasets/bootstrap';

import DynamoDb from '../../lib/dynamo-db';

import IntroSection from '../../components/communities/detail/intro';
import PublicAdjusterSection from '../../components/communities/detail/public-adjuster';
import WhatTheyDoSection from '../../components/communities/detail/what-they-do';
import WhyChooseSection from '../../components/communities/detail/why-choose';
import RankedSection from '../../components/communities/detail/ranked';
import VideoSection from '../../components/communities/detail/video';
import InspectionFormSection from '../../components/common/sections/inspection-form';

import '../../styles/modules/communities.less';

export default function Community({ community }) {
	const router = useRouter();

	if (!community) {
		community = {
			Community: { S: '' },
			CommunitySlug: { S: router.query.slug },
		};
	}

	const CommunityLable = community.Community.S;

	const pageHeading = CommunityLable
		? `Public Adjuster ${CommunityLable}`
		: `Oops, we couldn't find the page...`;

	const LayoutConfig = {
		title: CommunityLable,
		description: `Leading public adjuster in ${
			CommunityLable ? CommunityLable : 'USA'
		}, get your claims and settlements. Have property claim issues? We are here to provide you best solutions for claims and adjustment. Get more money for your settlements and claim.`,
		banner: {
			title: pageHeading,
		},
		breadcrumb: [
			dataset.router.communities,
			{
				label: CommunityLable ? CommunityLable : 'Page Not Found',
			},
		],
		className: dataset.router.communities.key,
	};

	if (community.Image && community.Image.S !== '')
		LayoutConfig.banner = {
			...LayoutConfig.banner,
			image: {
				src: `${dataset.images.bannerCommunDir.src}${community.StateSlug.S}/${community.CountySlug.S}/${community.Image.S}`,
				alt: community.ImageAlt ? community.ImageAlt.S : '',
			},
		};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection community={community} />
			<PublicAdjusterSection community={community} />
			<WhatTheyDoSection community={community} />
			<WhyChooseSection />
			<RankedSection community={community} />
			<VideoSection community={community} />
			<InspectionFormSection />
		</Layout>
	);
}

export async function getStaticPaths() {
	const dynamoDb = new DynamoDb();

	const paths = await dynamoDb.getDefCommunities();

	return {
		paths,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }) {
	const dynamoDb = new DynamoDb();

	let community = await dynamoDb.getCommunity(params.slug);

	if (!community) {
		community = {
			Community: { S: '' },
			CommunitySlug: { S: params.slug },
		};
	}

	return {
		props: {
			community,
		},
		revalidate: 1,
	};
}

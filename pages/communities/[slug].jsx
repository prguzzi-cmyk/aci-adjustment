import { useRouter } from 'next/router';

import Layout from '../../layouts/community';

import dataset from '../../utils/datasets/bootstrap';

import { getDefCommunities, getCommunity } from '../../lib/dynamo-db';

import IntroSection from '../../components/communities/detail/intro';
import InspectionSection from '../../components/communities/detail/inspection';
import WhyChooseSection from '../../components/communities/detail/why-choose';
import RankedSection from '../../components/communities/detail/ranked';
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
			CommunityLable ? CommunityLable : dataset.general.pincode
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
			image: {
				src: `${dataset.images.bannerCommunDir.src}${community.Image.S}`,
				alt: community.ImageAlt ? community.ImageAlt.S : '',
			},
		};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection community={community} />
			<InspectionSection community={community} />
			<WhyChooseSection community={community} />
			<RankedSection />
			<InspectionFormSection />
		</Layout>
	);
}

export async function getStaticPaths() {
	console.log('helllllllllllllllllllllllllllllll');
	console.log(process.env.DEF_COUNTY);
	const paths = await getDefCommunities();

	return {
		paths,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }) {
	let community = await getCommunity(params.slug);

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

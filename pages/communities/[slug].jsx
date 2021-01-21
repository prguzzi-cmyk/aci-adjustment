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

	const LayoutConfig = {
		title: community.Community.S,
		description: `Leading public adjuster in ${
			community.Community.S ? community.Community.S : dataset.general.pincode
		}, get your claims and settlements. Have property claim issues? We are here to provide you best solutions for claims and adjustment. Get more money for your settlements and claim.`,
		breadcrumb: [
			dataset.router.communities,
			{
				label: community.Community.S ? community.Community.S : 'Page Not Found',
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
	const paths = await getDefCommunities();

	return {
		paths,
		fallback: true,
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

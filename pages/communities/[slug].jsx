import { useRouter } from 'next/router';

import Layout from '../../layouts/community';

import dataset from '../../utils/datasets/bootstrap';
import { CommunityPageData } from '../../utils/structured-data/pages';

import DynamoDb from '../../lib/dynamo-db';

import IntroSection from '../../components/communities/detail/intro';
import ClaimSettlementSection from '../../components/communities/detail/claim-settlement';
import NewInsuranceClaimSection from '../../components/communities/detail/new-insurance-claim';
import CommonMistakesSection from '../../components/communities/detail/common-mistakes';
import GroupHelpSection from '../../components/communities/detail/group-help';
import PendingInsuranceClaimSection from '../../components/communities/detail/pending-insurance-claim';
import HelpAnyStageSection from '../../components/communities/detail/help-any-stage';
import ReopeningInsuranceClaimSection from '../../components/communities/detail/reopening-insurance-claim';
import RejectedInsuranceClaimSection from '../../components/communities/detail/rejected-insurance-claim';
import MoneyPartSection from '../../components/communities/detail/money-part';
import AdjusterCoverageSection from '../../components/communities/detail/adjuster-coverage';
import VideoSection from '../../components/communities/detail/video';
import InspectionFormSection from '../../components/common/sections/inspection-form';

require('../../styles/modules/communities.less');

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
		}, get your insurance claims and settlements. Have property claim issues? We are here to provide you best solutions for claims and adjustment. Get more money for your settlements and claim.`,
		canonical:
			community && community.Canonical && !community.Canonical.BOOL
				? ''
				: dataset.router.home.url,
		structuredData: CommunityPageData(),
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
			<ClaimSettlementSection community={community} />
			<NewInsuranceClaimSection community={community} />
			<CommonMistakesSection community={community} />
			<GroupHelpSection community={community} />
			<PendingInsuranceClaimSection community={community} />
			<HelpAnyStageSection community={community} />
			<ReopeningInsuranceClaimSection />
			<RejectedInsuranceClaimSection community={community} />
			<MoneyPartSection community={community} />
			<AdjusterCoverageSection community={community} />
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

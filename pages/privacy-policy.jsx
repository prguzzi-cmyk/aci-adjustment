import Link from 'next/link';
import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

import config from '../utils/config';

require('../styles/modules/privacy-policy.less');

const { Title, Text, Paragraph } = Typography;

export default function PrivacyPolicy() {
	const LayoutConfig = {
		title: dataset.router.privacy.label,
		description: `This privacy notice applies solely to information collected by this web site.`,
		banner: {
			image: dataset.images.bannerPolicyReview,
			title: dataset.router.privacy.label,
		},
		breadcrumb: [dataset.router.privacy],
		className: dataset.router.privacy.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<div className='intro-container'>
				<Title level={2} className='title'>
					{`${dataset.general.name} ${dataset.general.description}`}{' '}
					<Text>Privacy Policy</Text>
				</Title>

				<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
					<QueueAnim key='intro-content-queue' {...config.QueueAnim({})}>
						<Paragraph key='11'>
							This privacy notice discloses the privacy practices for
							<Text className='clr-primary'> aciadjustment.com</Text>. This
							privacy notice applies solely to information collected by this web
							site. It will notify you of the following:
						</Paragraph>

						<ul key='12'>
							<li>
								What personally identifiable information is collected from you
								through the web site, how it is used and with whom it may be
								shared.
							</li>
							<li>
								What choices are available to you regarding the use of your
								data.
							</li>
							<li>
								The security procedures in place to protect the misuse of your
								information.
							</li>
							<li>How you can correct any inaccuracies in the information.</li>
						</ul>
					</QueueAnim>
				</OverPack>
			</div>

			<div className='information-container'>
				<Title level={3} className='title'>
					<Text>Information</Text> Collection, Use, and Sharing
				</Title>

				<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
					<QueueAnim key='information-content-queue' {...config.QueueAnim({})}>
						<Paragraph key='21'>
							We are the sole owners of the information collected on this site.
							We only have access to/collect information that you voluntarily
							give us via email or other direct contact from you. We will not
							sell or rent this information to anyone.
						</Paragraph>

						<Paragraph key='22'>
							We will use your information to respond to you, regarding the
							reason you contacted us. We will not share your information with
							any third party outside of our organization, other than as
							necessary to fulfill your request.
						</Paragraph>

						<Paragraph key='23'>
							Unless you ask us not to, we may contact you via email in the
							future to tell you about specials, new products or services, or
							changes to this privacy policy.
						</Paragraph>
					</QueueAnim>
				</OverPack>
			</div>

			<div className='access-container'>
				<Title level={3} className='title'>
					Your Access to and Control Over
					<Text> Information</Text>
				</Title>

				<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
					<QueueAnim key='access-content-queue' {...config.QueueAnim({})}>
						<Paragraph key='31'>
							You may opt out of any future contacts from us at any time. You
							can do the following at any time by contacting us via the email
							address or phone number given on our website:
						</Paragraph>

						<ul key='32'>
							<li>See what data we have about you, if any.</li>
							<li>Change/correct any data we have about you.</li>
							<li>Have us delete any data we have about you.</li>
							<li>Express any concern you have about our use of your data.</li>
						</ul>
					</QueueAnim>
				</OverPack>
			</div>

			<div className='security-container'>
				<Title level={3} className='title'>
					<Text>Security</Text>
				</Title>

				<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
					<QueueAnim key='security-content-queue' {...config.QueueAnim({})}>
						<Paragraph key='41'>
							We take precautions to protect your information. When you submit
							sensitive information via the website, your information is
							protected both online and offline.
						</Paragraph>

						<Paragraph key='42'>
							Wherever we collect sensitive information, that information is
							encrypted and transmitted to us in a secure way. You can verify
							this by looking for a closed lock icon at the bottom of your web
							browser or looking for “https” at the beginning of the address of
							the web page.
						</Paragraph>

						<Paragraph key='43'>
							While we use encryption to protect sensitive information
							transmitted online, we also protect your information offline. Only
							employees who need the information to perform a specific job (for
							example, billing or customer service) are granted access to
							personally identifiable information. The computers/servers in
							which we store personally identifiable information are kept in a
							secure environment.
						</Paragraph>

						<Paragraph key='44' strong>
							If you feel that we are not abiding by this privacy policy, you
							should contact us immediately via telephone at{' '}
							<Link href={`tel:${dataset.general.phone}`} strong>
								<a>{dataset.general.phoneFormatted}</a>
							</Link>{' '}
							or via email{' '}
							<Link href={`mailto:${dataset.emails.claim.email}`}>
								<a>{dataset.emails.claim.email}</a>
							</Link>
							.
						</Paragraph>
					</QueueAnim>
				</OverPack>
			</div>

			<div className='cookies-container'>
				<Title level={3} className='title'>
					<Text>Cookies</Text>
				</Title>

				<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
					<QueueAnim key='cookies-content-queue' {...config.QueueAnim({})}>
						<Paragraph key='51'>
							We use "cookies" on this site. A cookie is a piece of data stored
							on a site visitor's hard drive to help us improve your access to
							our site and identify repeat visitors to our site. Cookies can
							also enable us to track and target the interests of our users to
							enhance the experience on our site. Usage of a cookie is in no way
							linked to any personally identifiable information on our site.
						</Paragraph>
					</QueueAnim>
				</OverPack>
			</div>

			<div className='links-container'>
				<Title level={3} className='title'>
					<Text>Links</Text>
				</Title>

				<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
					<QueueAnim key='links-content-queue' {...config.QueueAnim({})}>
						<Paragraph key='61'>
							This web site contains links to other sites. Please be aware that
							we are not responsible for the content or privacy practices of
							such other sites. We encourage our users to be aware when they
							leave our site and to read the privacy statements of any other
							site that collects personally identifiable information.
						</Paragraph>
					</QueueAnim>
				</OverPack>
			</div>
		</Layout>
	);
}

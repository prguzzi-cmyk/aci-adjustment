import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import moment from 'moment';

import config from '../../utils/config';

import dataset from '../../utils/datasets/bootstrap';

const { Title, Text, Link } = Typography;

const PostDetail = ({ post }) => {
	return (
		<div className='post-container'>
			<Title level={1} className='title'>
				{post.title}
			</Title>

			<Text className='post-date'>
				By <em>{post.author}</em> | Posted On:{' '}
				<em>{moment(post.date).format('LL')}</em>
			</Text>

			<OverPack
				className='content'
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim key='posts-queue' {...config.QueueAnim({})}>
					<div key='1' dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
					<div key='2' className='aci-services'>
						<h2>ACI Adjustment Group Services</h2>
						<Text>
							ACI Adjustment group provides assistance with insurance claim
							investigation in storm, fire, water damage, and all other common
							insurance claims. The services we provide include:
						</Text>

						<ul>
							<li>
								Insurance policy review to help you understand the terms and
								conditions of your insurance policy.
							</li>
							<li>
								Evaluating damages that are covered under your insurance policy.
							</li>
							<li>
								Proving the damages done to your property so that you get claim
								money according to the damage.
							</li>
							<li>
								Following up with your insurance claim process to get it
								processed fast.
							</li>
						</ul>
					</div>

					<div key='3' className='aci-contacting'>
						<h2>Contacting Us</h2>
						<Text>
							If you want assistance in any property insurance related issue,
							you can contact us 24/7 via our toll free number{' '}
							<Link href={`tel:${dataset.general.phone}`} strong>
								{dataset.general.phoneFormatted}
							</Link>{' '}
							or by filling in the contact form on our website or by sending us
							an email at{' '}
							<Link href={`mailto:${dataset.emails.claim.email}`} strong>
								<a>{dataset.emails.claim.email}</a>
							</Link>
							.
						</Text>
					</div>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default PostDetail;

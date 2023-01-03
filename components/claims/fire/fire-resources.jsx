import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Image from 'next/image';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const FireResourcesSection = () => {
	return (
		<div className='fire-resources-container'>
			<Title level={3} className='title'>
				<Text>Fire</Text> Resources
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					justify: 'center',
					align: 'middle',
					gutter: [20, 20],
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='operation-fire-safety'
					component={Col}
					componentProps={{
						md: 4,
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Image
						key='image'
						src={dataset.images.claimFire.fireSafety.src}
						alt={dataset.images.claimFire.fireSafety.alt}
						width={176}
						height={176}
					/>
				</QueueAnim>

				<QueueAnim
					component={Col}
					componentProps={{
						md: 10,
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Paragraph key='1'>
						Operation Fire Safety is a non-profit initiative to promote fire
						safety awareness, prevent fires and save lives. ACI Adjustment Group
						has assisted Operation Fire Safety in distributing thousands of
						smoke alarms throughout the Philadelphia area. Proceeds from
						Operation Fire Safety's Fire Safety Manual go directly to support
						local Fire Departments.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default FireResourcesSection;

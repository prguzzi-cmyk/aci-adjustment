import { Row, Col, Typography } from 'antd';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text } = Typography;

const RankedSection = () => {
	return (
		<div className='rank-container'>
			<Title level={2} className='rank-title'>
				ACI Adjustment Group ranked #1 in 2018 for Customer Service!
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'rank-content',
					justify: 'center',
					align: 'middle',
				}}
				{...config.OverPack({})}
			>
				<QueueAnim
					component={Col}
					componentProps={{
						md: 6,
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Image
						key='image'
						className='rank-image'
						src='/images/upa-2018.jpg'
						alt='UPA 2018'
						width={140}
						height={140}
					/>
				</QueueAnim>

				<QueueAnim
					component={Col}
					componentProps={{
						md: 8,
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Text key='text' className='rank-text'>
						ACI Adjustment Group was ranked #1 by the UPA (United Public
						Adjusters for Customer Service &amp; Satisfaction this year for the
						5th year in a row!!!
					</Text>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default RankedSection;

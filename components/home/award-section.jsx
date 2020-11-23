import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Image from 'next/image';

const { Title, Text } = Typography;

const AwardSection = ({ packConfigs }) => {
	return (
		<div className='award-container'>
			<Title level={2} className='award-title'>
				<Text>Awards</Text> &amp; <Text>Achievements</Text>
			</Title>

			<OverPack playScale={packConfigs.OverPack.playScaleBottom}>
				<QueueAnim
					component={Row}
					componentProps={{
						className: 'award-content',
						gutter: [16, 24],
					}}
					key='queue'
					type='left'
					leaveReverse
					interval={50}
				>
					<Col key='1' md={6} className='img-wrapper'>
						<Image
							src='/images/awards/philadelphia.png'
							alt='Winner 2009 Philadelphia'
							width={174}
							height={110}
						/>
					</Col>

					<Col key='2' md={6} className='img-wrapper'>
						<Image
							src='/images/awards/inc.jpg'
							alt='Inc. 500'
							width={151}
							height={117}
						/>
					</Col>

					<Col key='3' md={6} className='img-wrapper'>
						<Image
							src='/images/awards/upa-2019.png'
							alt='UPA Customer Service 2019'
							width={148}
							height={131}
						/>
					</Col>

					<Col key='4' md={6} className='img-wrapper'>
						<Image
							src='/images/awards/upa.png'
							alt='United Public Adjusters'
							width={123}
							height={143}
						/>
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default AwardSection;

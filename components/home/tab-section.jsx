import { Tabs, Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { TabPane } = Tabs;
const { Link, Title } = Typography;

const TabSection = () => {
	return (
		<Tabs className='tab-container' defaultActiveKey='1' centered animated>
			<TabPane tab='ACI Adjustment Group' key='1' className='tabpane-adjuster'>
				<OverPack {...config.OverPack({})}>
					<QueueAnim
						component={Row}
						componentProps={{
							justify: 'center',
							align: 'middle',
							gutter: [30, 10],
						}}
						key='queue'
						{...config.QueueAnim({})}
					>
						<Col key='1' sm={24} md={12}>
							<iframe
								width='100%'
								height='315'
								src='https://www.youtube.com/embed/eCn_GuWyIkI'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</Col>

						<Col key='2' sm={24} md={12}>
							<Row className='title-wrapper'>
								<Col key='1' span={24}>
									<Link href='#'>
										<Title level={4}>
											CLICK HERE to visit the ACI Claim Center!
										</Title>
									</Link>
								</Col>
							</Row>

							<Row className='claims-wrapper'>
								<Col key='1' span={8}>
									<Link href='#'>Down Trees</Link>
								</Col>
								<Col key='2' span={8}>
									<Link href='#'>Roof Leaks</Link>
								</Col>
								<Col key='3' span={8}>
									<Link href='#'>Loss of Business</Link>
								</Col>
							</Row>

							<Row className='claims-wrapper'>
								<Col key='1' span={8}>
									<Link href='#'>Frozen Pipes</Link>
								</Col>
								<Col key='2' span={8}>
									<Link href='#'>Wind Damage</Link>
								</Col>
								<Col key='3' span={8}>
									<Link href='#'>Smoke &amp; Fire Claims</Link>
								</Col>
							</Row>
						</Col>
					</QueueAnim>
				</OverPack>
			</TabPane>

			<TabPane tab='Winter Insurance Claims' key='2' className='tabpane-winter'>
				<OverPack {...config.OverPack({})}>
					<QueueAnim
						component={Row}
						componentProps={{
							justify: 'center',
							align: 'middle',
							gutter: [30, 10],
						}}
						key='queue'
						{...config.QueueAnim({})}
					>
						<Col key='1' sm={24} md={12}>
							<iframe
								width='100%'
								height='315'
								src='https://www.youtube.com/embed/TQO9QFl5wfA'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</Col>

						<Col key='2' sm={24} md={12}>
							<Row className='title-wrapper'>
								<Col key='1' span={24}>
									<Title level={4}>Common Winter Insurance Claims</Title>
								</Col>
							</Row>

							<Row className='claims-wrapper'>
								<Col key='1' span={24}>
									<ul>
										<li>
											<Link href='#'>Snow/Ice Storm Damage</Link>
										</li>
										<li>
											<Link href='#'>Plumbing Leaks (Frozen Pipes!)</Link>
										</li>
										<li>
											<Link href='#'>
												Smoke Damage (Oil Heater Puff Backs!)
											</Link>
										</li>
										<li>
											<Link href='#'>Accidental Damage</Link>
										</li>
									</ul>
								</Col>
							</Row>
						</Col>
					</QueueAnim>
				</OverPack>
			</TabPane>
		</Tabs>
	);
};

export default TabSection;

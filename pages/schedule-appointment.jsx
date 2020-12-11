import { Typography } from 'antd';
import Layout from '../layouts/default';

import dataset from '../utils/datasets/router';

import '../styles/modules/schedule-appointment.less';

const { Title, Text } = Typography;

export default function ScheduleAppointment() {
	const LayoutConfig = {
		title: `Schedule Appointment`,
		banner: {
			image: {
				src: '/images/home-banner.jpg',
				alt: 'Banner Image',
			},
			title: 'Schedule an appointment',
		},
		breadcrumb: [dataset.router.schAppointment],
	};

	return (
		<Layout {...LayoutConfig}>
			<div className='appointment-container'>
				<Title level={2} className='appointment-title'>
					<Text>Schedule an Appointment with an ACI Agent Here</Text>
				</Title>
			</div>
		</Layout>
	);
}

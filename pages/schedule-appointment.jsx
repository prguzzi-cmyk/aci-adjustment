import { Typography } from 'antd';
import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

import '../styles/modules/schedule-appointment.less';

const { Title, Text } = Typography;

export default function ScheduleAppointment() {
	const LayoutConfig = {
		title: dataset.router.schAppointment.label,
		banner: {
			image: dataset.images.bannerDefault,
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

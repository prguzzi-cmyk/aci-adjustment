import { useEffect } from 'react';
import { Typography } from 'antd';
import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

import '../styles/modules/schedule-appointment.less';

const { Title, Text } = Typography;

export default function ScheduleAppointment() {
	useEffect(() => {
		const setMoreSrc =
			'https://my.setmore.com/webapp/js/src/others/setmore_iframe.js';
		const setMoreScript = document.createElement('script');
		setMoreScript.src = setMoreSrc;
		setMoreScript.async = true;
		document.body.appendChild(setMoreScript);

		return () => {
			document.body.removeChild(setMoreScript);
		};
	}, []);

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
				<Title level={2} className='title'>
					<Text>Schedule an Appointment with an ACI Agent Here</Text>
				</Title>

				<div className='content'>
					<a
						id='Setmore_button_iframe'
						href='https://my.setmore.com/bookingpage/b33a572b-8f6d-4d9f-b975-8997a3174ef4'
					>
						<img
							border='none'
							src='https://storage.googleapis.com/setmore-assets/2.0/Images/Integration/book-now-blue.svg'
							alt='Book an appointment with ACI ADJUSTMENT GROUP'
						/>
					</a>
				</div>
			</div>
		</Layout>
	);
}

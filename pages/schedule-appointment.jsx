import { useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Layout from '../layouts/default';

import config from '../utils/config';
import dataset from '../utils/datasets/bootstrap';

import '../styles/modules/schedule-appointment.less';

const { Title, Text, Paragraph } = Typography;

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
		title: 'Schedule an Appointment',
		description:
			'Book your appoint today with ACI Adjustment Group. We want to make sure the process will be convenient for you. So, schedule an appointment with us to find the perfect meeting time.',
		banner: {
			image: dataset.images.bannerDefault,
			title: 'Schedule an appointment',
		},
		breadcrumb: [dataset.router.schAppointment],
		className: dataset.router.schAppointment.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<div className='intro-container'>
				<Title level={2} className='title'>
					Schedule an Appointment with an <Text>ACI Agent</Text> Here
				</Title>

				<OverPack
					component={Row}
					componentProps={{
						className: 'content',
						justify: 'middle',
						align: 'center',
					}}
					{...config.OverPack({})}
				>
					<QueueAnim
						key='intro-content-queue'
						component={Col}
						componentProps={{
							md: 20,
						}}
						{...config.QueueAnim({})}
					>
						<Paragraph key='1'>
							Schedule an appointment with ACI today!
						</Paragraph>

						<Paragraph key='2'>
							Click below or call 1-800-809-4302 to receive your no obligation,
							FREE property inspection and insurance claim consultation. This
							offer applies to both residential and commercial properties.
						</Paragraph>

						<Paragraph key='3'>
							Feel free to reach out with help filing a new claim, or if your
							insurance company has already made you an offer! ACI is here to
							help!
						</Paragraph>

						<Paragraph key='4' className='appointment-btn'>
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
						</Paragraph>
					</QueueAnim>
				</OverPack>
			</div>
		</Layout>
	);
}

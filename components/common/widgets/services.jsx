import { Typography } from 'antd';
import Link from 'next/link';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text } = Typography;

const WidgetServices = () => {
	let cntr = 0;

	const DamageStormArr = [];
	for (const damage in dataset.routerDamageStorm) {
		if (Object.hasOwnProperty.call(dataset.routerDamageStorm, damage)) {
			DamageStormArr.push(dataset.routerDamageStorm[damage].label);
		}
	}

	const DamageFireArr = [];
	for (const damage in dataset.routerDamageFire) {
		if (Object.hasOwnProperty.call(dataset.routerDamageFire, damage)) {
			DamageFireArr.push(dataset.routerDamageFire[damage].label);
		}
	}

	const DamageWaterArr = [];
	for (const damage in dataset.routerDamageWater) {
		if (Object.hasOwnProperty.call(dataset.routerDamageWater, damage)) {
			DamageWaterArr.push(dataset.routerDamageWater[damage].label);
		}
	}

	const DamageCommercialArr = [];
	for (const damage in dataset.routerDamageCommercial) {
		if (Object.hasOwnProperty.call(dataset.routerDamageCommercial, damage)) {
			DamageCommercialArr.push(dataset.routerDamageCommercial[damage].label);
		}
	}

	const DamageCommonArr = [];
	for (const damage in dataset.routerDamageCommon) {
		if (Object.hasOwnProperty.call(dataset.routerDamageCommon, damage)) {
			DamageCommonArr.push(dataset.routerDamageCommon[damage].label);
		}
	}

	return (
		<div className='widget-services-container'>
			<Title level={3} className='title'>
				<Text>Services</Text> we provide
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					key='widget-services-queue'
					component='ul'
					{...config.QueueAnim({})}
				>
					{/* Storm Claims */}
					<li key={cntr++}>
						<Link href={dataset.router.claimStorm.path}>
							<a>{dataset.router.claimStorm.label}</a>
						</Link>
					</li>

					<ul key={cntr++}>
						{DamageStormArr.map((item) => (
							<li key={cntr++}>{item}</li>
						))}
					</ul>

					{/* Fire Claims */}
					<li key={cntr++}>
						<Link href={dataset.router.claimFire.path}>
							<a>{dataset.router.claimFire.label}</a>
						</Link>
					</li>

					<ul key={cntr++}>
						{DamageFireArr.map((item) => (
							<li key={cntr++}>{item}</li>
						))}
					</ul>

					{/* Water Claims */}
					<li key={cntr++}>
						<Link href={dataset.router.claimWater.path}>
							<a>{dataset.router.claimWater.label}</a>
						</Link>
					</li>

					<ul key={cntr++}>
						{DamageWaterArr.map((item) => (
							<li key={cntr++}>{item}</li>
						))}
					</ul>

					{/* Commercial Claims */}
					<li key={cntr++}>
						<Link href={dataset.router.claimCommercial.path}>
							<a>{dataset.router.claimCommercial.label}</a>
						</Link>
					</li>

					<ul key={cntr++}>
						{DamageCommercialArr.map((item) => (
							<li key={cntr++}>{item}</li>
						))}
					</ul>

					{/* Common Claims */}
					<li key={cntr++}>
						<Link href={dataset.router.claimCommon.path}>
							<a>{dataset.router.claimCommon.label}</a>
						</Link>
					</li>

					<ul key={cntr++}>
						{DamageCommonArr.map((item) => (
							<li key={cntr++}>{item}</li>
						))}
					</ul>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default WidgetServices;

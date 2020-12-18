import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Image from 'next/image';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				<Text>Preserve</Text> Your Home
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					gutter: [20, 20],
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='intro-image'
					component={Col}
					componentProps={{
						md: 9,
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Image
						key='image'
						src={dataset.images.claimFire.preserveHome.src}
						alt={dataset.images.claimFire.preserveHome.alt}
						width={450}
						height={450}
					/>
				</QueueAnim>

				<QueueAnim
					key='intro-content'
					component={Col}
					componentProps={{
						md: 15,
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Title key='1' level={5}>
						5 Post - Fire Tips to Preserve Your Home and Contents
					</Title>

					<Paragraph key='2'>
						<Text>Clothing</Text> - Smoke damage requires special cleaning
						techniques. Improper cleaning will set the stains and odor, making
						them impossible to remove. Check with your Public Adjuster for a
						recommendation about a dry cleaner.
					</Paragraph>

					<Paragraph key='3'>
						<Text>Mildew</Text> - To prevent mildew, remove wet or damp objects
						from the house as soon as possible and allow to dry, preferably in
						the open air and sunshine. To remove mildew, wash the stain with
						warm, soapy water, rinse well and allow to dry in the sun. If the
						stain is difficult to remove, try washing with lemon juice or
						one-tablespoon of pesborate bleach in 1 pint of lukewarm water, or a
						diluted solution of chlorine bleach.
					</Paragraph>

					<Paragraph key='4'>
						<Text>Walls & Ceilings</Text> - Allow soot to dry untouched for at
						least 24 hours. Trying to remove soot before it has dried will only
						spread the stain and make it permanent. After soot has dried, clean
						walls or ceilings with the same tri-sodium phosphate and Lysol mix
						described above for cleaning clothes. Wear rubber gloves and old
						clothing when washing with this mix. After washing, rinse with clear
						water and allow to dry. Commercial cleaning products, available from
						paint and wall paper dealers, can be used. Some commercial cleaners
						are very powerful. Always follow the recommended directions exactly.
					</Paragraph>

					<Paragraph key='5'>
						<Text>Wood Furniture &amp; Fixtures</Text> - Clear off all mud and
						dirt. Remove drawers and allow to dry thoroughly. Scrub with a stiff
						brush and cleaning solution. Wet wood decays and molds easily. Try
						to ventilate the room or, if serviceable, run the air conditioner to
						dry the room. If the furniture can be removed from the room, you can
						dry it outside, but only in a shaded area. Never place furniture in
						direct sunlight.
					</Paragraph>

					<Paragraph key='6'>
						<Text>Food</Text> - Discard any food items exposed to fire, smoke or
						heat. Even canned goods which have been exposed to heat may be
						unsafe.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;

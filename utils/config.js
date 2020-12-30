/* Overpack Configuration */
const PlayScale = {
	noScale: 0,
	bottom: 0.3,
	center: 0.5,
	top: 0.7,
};

const OverPack = ({ playScale = PlayScale.bottom }) => {
	return { playScale };
};

/* QueueAnim Configuration */
const QueueAnim = ({
	type = 'bottom',
	leaveReverse = true,
	interval = 100,
	delay = 0,
	duration = 500,
	ease = ['easeInCubic', 'easeOutCubic'],
}) => {
	return {
		type,
		leaveReverse,
		interval,
		delay,
		duration,
		ease,
	};
};

/* TweenOne Configuration */
const TweenOne = ({
	reverse = false,
	coordinate = 'y',
	path = '+=30',
	type = 'from',
	opacity = 0,
	delay = 0,
	ease = 'easeInOutSine',
}) => {
	switch (coordinate) {
		case 'x':
			return {
				reverse,
				animation: {
					x: path,
					type,
					opacity,
					delay,
					ease,
				},
			};

		case 'y':
		default:
			return {
				reverse,
				animation: {
					y: path,
					type,
					opacity,
					delay,
					ease,
				},
			};
	}
};

const MessageDuration = {
	shorter: 3,
	normal: 5,
	longer: 8,
};

export default { PlayScale, OverPack, QueueAnim, TweenOne, MessageDuration };

export default class StructuredData {
	getBase() {
		return {
			'@context': 'https://schema.org',
		};
	}

	getACIGeneralData() {
		return {
			'@type': 'Notary',
			image: [
				'https://aciadjustment.com/images/logo.png',
				'https://aciadjustment.com/images/aci-hq.jpg',
			],
			'@id': '',
			name: 'ACI Adjustment Group',
			url: 'https://aciadjustment.com',
			telephone: '+18008094302',
			openingHoursSpecification: [
				{
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: [
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
					],
					opens: '00:00',
					closes: '23:59',
				},
			],
		};
	}

	getACIAddress() {
		return {
			address: {
				'@type': 'PostalAddress',
				streetAddress: '803 Park Avenue',
				addressLocality: 'Newtown',
				addressRegion: 'Pa',
				postalCode: '18940',
				addressCountry: 'US',
			},
		};
	}

	getACIReview() {
		return {
			review: {
				'@type': 'Review',
				reviewRating: {
					'@type': 'Rating',
					ratingValue: '4.8',
					bestRating: '5',
				},
				author: {
					'@type': 'Person',
					name: 'Peter Guzzi',
				},
			},
		};
	}

	getACIGeo() {
		return {
			geo: {
				'@type': 'GeoCoordinates',
				latitude: 40.2811032,
				longitude: -74.996441,
			},
		};
	}

	getACIDepartment() {
		return {
			department: [
				{
					'@type': 'Notary',
					image: [
						'https://aciadjustment.com/images/logo.png',
						'https://aciadjustment.com/images/aci-hq.jpg',
					],
					name: "ACI's Emergency Department",
					telephone: '+18008094302',
					openingHoursSpecification: [
						{
							'@type': 'OpeningHoursSpecification',
							dayOfWeek: [
								'Monday',
								'Tuesday',
								'Wednesday',
								'Thursday',
								'Friday',
								'Saturday',
								'Sunday',
							],
							opens: '00:00',
							closes: '23:59',
						},
					],
				},
			],
		};
	}
}

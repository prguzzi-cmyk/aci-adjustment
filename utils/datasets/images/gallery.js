const GalleryPath = '/images/gallery/';

const keywords = [
	'Public Adjusters',
	'Public Insurance Adjuster',
	'Independent Adjuster',
	'Public Insurance Adjuster Near Me',
	'Insurance Adjuster Near Me',
	'Public Claims Adjuster',
];

const galleryImgs = [
	{
		name: '1.jpeg',
		alt: keywords[0],
		featured: false,
	},
	{
		name: '2.jpg',
		alt: keywords[1],
		featured: false,
	},
	{
		name: '3.jpg',
		alt: keywords[2],
		featured: false,
	},
	{
		name: '4.jpg',
		alt: keywords[3],
		featured: true,
	},
	{
		name: '5.jpg',
		alt: keywords[4],
		featured: false,
	},
	{
		name: '6.jpg',
		alt: keywords[5],
		featured: false,
	},
	{
		name: '7.jpg',
		alt: keywords[0],
		featured: true,
	},
	{
		name: '8.jpg',
		alt: keywords[1],
		featured: false,
	},
	{
		name: '9.jpg',
		alt: keywords[2],
		featured: true,
	},
	{
		name: '10.jpg',
		alt: keywords[3],
		featured: true,
	},
	{
		name: '11.jpg',
		alt: keywords[4],
		featured: false,
	},
	{
		name: '12.jpg',
		alt: keywords[5],
		featured: false,
	},
	{
		name: '13.jpg',
		alt: keywords[0],
		featured: false,
	},
	{
		name: '14.jpg',
		alt: keywords[1],
		featured: false,
	},
	{
		name: '15.jpg',
		alt: keywords[2],
		featured: false,
	},
];

export const Gallery = galleryImgs.map((value) => {
	return {
		src: `${GalleryPath}${value.name}`,
		alt: value.alt,
	};
});

export const FeaturedGallery = galleryImgs
	.filter((value) => (value.featured ? true : false))
	.map((value) => {
		return {
			src: `${GalleryPath}${value.name}`,
			alt: value.alt,
		};
	});

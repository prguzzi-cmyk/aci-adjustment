import { create } from 'xmlbuilder2';
import moment from 'moment';

import DynamoDb from '../../../lib/dynamo-db';

import dataset from '../../../utils/datasets/router';
import { ReFeedback } from '../../../utils/config';

export default async (req, res) => {
	if (
		req.headers.authorization !==
		'Basic bmF2aXNpbmdoOkhEZ0wyX1wkQ1w5d1lLJTI3JkthISN4KXRYWD81JkJbOTpCenRZQGpdUw=='
	) {
		const response = {
			success: false,
			message: ReFeedback.RES_ERR_AUTH,
		};

		res.json(response);
	}

	const lastmod = moment().format('YYYY-MM-DD');

	const dynamoDb = new DynamoDb();

	const sitemap = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
		xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
		'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
		'xsi:schemaLocation':
			'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
	});

	const states = await dynamoDb.getStates();

	for (let state of states.Items) {
		const counties = await dynamoDb.getCounties(state.StateSlug.S);

		for (let county of counties.Items) {
			const communities = await dynamoDb.getCommunities(county.CountySlug.S);

			communities.Items.map((community) => {
				if (community && community.ShowACI && community.ShowACI.BOOL === false)
					return false;

				sitemap
					.ele('url')
					.ele('loc')
					.txt(
						`https://${req.headers.host}${dataset.router.communities.path}/${community.CommunitySlug.S}`
					)
					.up()
					.ele('lastmod')
					.txt(lastmod)
					.up()
					.ele('changefreq')
					.txt('weekly')
					.up()
					.ele('priority')
					.txt('0.8')
					.up()
					.up();
			});
		}
	}

	sitemap.up();

	// convert the XML tree to string
	const xml = sitemap.end({ prettyPrint: true });

	res.send(xml);
};

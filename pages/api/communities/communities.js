import DynamoDb from '../../../lib/dynamo-db';
import { ReFeedback } from '../../../utils/config';

export default async (req, res) => {
	let response;
	const dynamoDb = new DynamoDb(process.env.AWS_REGION);

	const communities = await dynamoDb.getCommunities(
		process.env.TBL_COMMUNITIES,
		process.env.IND_COUNTY,
		req.body.county
	);

	if (communities && communities.Items) {
		res.statusCode = 200;
		response = { success: true, data: communities.Items };
	} else {
		res.statusCode = 500;
		response = {
			success: false,
			message: ReFeedback.RES_ERR_MAIL,
		};
	}

	res.json(response);
};

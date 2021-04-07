import DynamoDb from '../../../lib/dynamo-db';
import { ReFeedback } from '../../../utils/config';

export default async (req, res) => {
	let response;
	const dynamoDb = new DynamoDb();

	const communities = await dynamoDb.getCommunities(
		req.body.state,
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

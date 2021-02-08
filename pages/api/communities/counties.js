import DynamoDb from '../../../lib/dynamo-db';
import { ReFeedback } from '../../../utils/config';

export default async (req, res) => {
	let response;
	const dynamoDb = new DynamoDb(process.env.AWS_REGION);

	const counties = await dynamoDb.getCounties(
		process.env.TBL_COUNTIES,
		process.env.IND_STATE,
		req.body.state
	);

	if (counties && counties.Items) {
		res.statusCode = 200;
		response = { success: true, data: counties.Items };
	} else {
		res.statusCode = 500;
		response = {
			success: false,
			message: ReFeedback.RES_ERR_MAIL,
		};
	}

	res.json(response);
};

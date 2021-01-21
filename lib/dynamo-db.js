import {
	DynamoDBClient,
	GetItemCommand,
	QueryCommand,
} from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });

const dynamoDb = {
	get: async (params) => await client.send(new GetItemCommand(params)),
	query: async (params) => await client.send(new QueryCommand(params)),
};

export const getDefCommunities = async () => {
	const communities = await dynamoDb.query({
		TableName: process.env.TBL_COMMUNITY,
		IndexName: process.env.IND_COUNTY,
		KeyConditionExpression: 'CountySlug = :county',
		ExpressionAttributeValues: {
			':county': { S: process.env.DEF_COUNTY },
		},
	});

	return communities.Items.map((element) => {
		return {
			params: {
				slug: element.CommunitySlug.S,
			},
		};
	});
};

export const getCommunity = async (slug) => {
	const community = await dynamoDb.query({
		TableName: process.env.TBL_COMMUNITY,
		KeyConditionExpression: 'CommunitySlug = :community',
		ExpressionAttributeValues: {
			':community': { S: slug },
		},
		Limit: 1,
	});

	return community.Items[0];
};

export default dynamoDb;

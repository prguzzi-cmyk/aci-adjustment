import {
	DynamoDBClient,
	GetItemCommand,
	ScanCommand,
	QueryCommand,
} from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });

const dynamoDb = {
	get: async (params) => await client.send(new GetItemCommand(params)),
	scan: async (params) => await client.send(new ScanCommand(params)),
	query: async (params) => await client.send(new QueryCommand(params)),
};

export const getStates = async () => {
	const states = await dynamoDb.scan({
		TableName: process.env.TBL_STATES,
	});

	return states;
};

export const getCounties = async (state) => {
	const counties = await dynamoDb.query({
		TableName: process.env.TBL_COUNTIES,
		IndexName: process.env.IND_STATE,
		KeyConditionExpression: 'StateSlug = :state',
		ExpressionAttributeValues: {
			':state': { S: state },
		},
	});

	return counties;
};

export const getDefCommunities = async (county) => {
	const communities = await getCommunities(county);

	return communities.Items.map((element) => {
		return {
			params: {
				slug: element.CommunitySlug.S,
			},
		};
	});
};

export const getCommunities = async (county) => {
	const communities = await dynamoDb.query({
		TableName: process.env.TBL_COMMUNITIES,
		IndexName: process.env.IND_COUNTY,
		KeyConditionExpression: 'CountySlug = :county',
		ExpressionAttributeValues: {
			':county': { S: county },
		},
	});

	return communities;
};

export const getCommunity = async (slug) => {
	const community = await dynamoDb.query({
		TableName: process.env.TBL_COMMUNITIES,
		KeyConditionExpression: 'CommunitySlug = :community',
		ExpressionAttributeValues: {
			':community': { S: slug },
		},
		Limit: 1,
	});

	return community.Items[0];
};

export default dynamoDb;

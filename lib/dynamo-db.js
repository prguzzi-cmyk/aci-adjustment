import {
	DynamoDBClient,
	GetItemCommand,
	ScanCommand,
	QueryCommand,
} from '@aws-sdk/client-dynamodb';

export default class DynamoDb {
	constructor(region) {
		this.client = new DynamoDBClient({ region: region });

		this.dynamoDb = {
			get: async (params) => await this.client.send(new GetItemCommand(params)),
			scan: async (params) => await this.client.send(new ScanCommand(params)),
			query: async (params) => await this.client.send(new QueryCommand(params)),
		};
	}

	async getStates(tblStates) {
		const states = await this.dynamoDb.scan({
			TableName: tblStates,
		});

		return states;
	}

	async getCounties(tblCounties, indState, state) {
		const counties = await this.dynamoDb.query({
			TableName: tblCounties,
			IndexName: indState,
			KeyConditionExpression: 'StateSlug = :state',
			ExpressionAttributeValues: {
				':state': { S: state },
			},
		});

		return counties;
	}

	async getDefCommunities(tblCommunities, indCounty, county) {
		const communities = await this.getCommunities(
			tblCommunities,
			indCounty,
			county
		);

		return communities.Items.map((element) => {
			return {
				params: {
					slug: element.CommunitySlug.S,
				},
			};
		});
	}

	async getCommunities(tblCommunities, indCounty, county) {
		const communities = await this.dynamoDb.query({
			TableName: tblCommunities,
			IndexName: indCounty,
			KeyConditionExpression: 'CountySlug = :county',
			ExpressionAttributeValues: {
				':county': { S: county },
			},
		});

		return communities;
	}

	async getCommunity(tblCommunities, slug) {
		const community = await this.dynamoDb.query({
			TableName: tblCommunities,
			KeyConditionExpression: 'CommunitySlug = :community',
			ExpressionAttributeValues: {
				':community': { S: slug },
			},
			Limit: 1,
		});

		return community.Items[0];
	}
}

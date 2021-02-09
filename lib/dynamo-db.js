import {
	DynamoDBClient,
	GetItemCommand,
	ScanCommand,
	QueryCommand,
} from '@aws-sdk/client-dynamodb';

export default class DynamoDb {
	region = 'us-east-1';
	tblStates = 'States';
	tblCounties = 'Counties';
	tblCommunities = 'Communities';
	indState = 'StateSlugCountyIndex';
	indCounty = 'CountySlugCommunityIndex';
	defCounty = 'bucks';

	constructor() {
		this.client = new DynamoDBClient({ region: this.region });

		this.dynamoDb = {
			get: async (params) => await this.client.send(new GetItemCommand(params)),
			scan: async (params) => await this.client.send(new ScanCommand(params)),
			query: async (params) => await this.client.send(new QueryCommand(params)),
		};
	}

	async getStates() {
		const states = await this.dynamoDb.scan({
			TableName: this.tblStates,
		});

		return states;
	}

	async getCounties(state) {
		const counties = await this.dynamoDb.query({
			TableName: this.tblCounties,
			IndexName: this.indState,
			KeyConditionExpression: 'StateSlug = :state',
			ExpressionAttributeValues: {
				':state': { S: state },
			},
		});

		return counties;
	}

	async getDefCommunities() {
		const communities = await this.getCommunities(this.defCounty);

		return communities.Items.map((element) => {
			return {
				params: {
					slug: element.CommunitySlug.S,
				},
			};
		});
	}

	async getCommunities(county) {
		const communities = await this.dynamoDb.query({
			TableName: this.tblCommunities,
			IndexName: this.indCounty,
			KeyConditionExpression: 'CountySlug = :county',
			ExpressionAttributeValues: {
				':county': { S: county },
			},
		});

		return communities;
	}

	async getCommunity(slug) {
		const community = await this.dynamoDb.query({
			TableName: this.tblCommunities,
			KeyConditionExpression: 'CommunitySlug = :community',
			ExpressionAttributeValues: {
				':community': { S: slug },
			},
			Limit: 1,
		});

		return community.Items[0];
	}
}

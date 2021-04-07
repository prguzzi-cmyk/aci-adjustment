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
	defState = 'pennsylvania';
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
			FilterExpression: 'ShowACI <> :showACI',
			ExpressionAttributeValues: {
				':showACI': { BOOL: false },
			},
		});

		return states;
	}

	async getCounties(state) {
		const counties = await this.dynamoDb.query({
			TableName: this.tblCounties,
			IndexName: this.indState,
			KeyConditionExpression: 'StateSlug = :state',
			FilterExpression: 'ShowACI <> :showACI',
			ExpressionAttributeValues: {
				':state': { S: state },
				':showACI': { BOOL: false },
			},
		});

		return counties;
	}

	async getDefCommunities() {
		const communities = await this.getCommunities(
			this.defState,
			this.defCounty
		);

		return communities.Items.map((element) => {
			return {
				params: {
					slug: element.CommunitySlug.S,
				},
			};
		});
	}

	async getCommunities(state, county, lastKey = '') {
		const queryObj = {
			TableName: this.tblCommunities,
			IndexName: this.indCounty,
			KeyConditionExpression: 'CountySlug = :county',
			FilterExpression: 'StateSlug = :state and ShowACI <> :showACI',
			ExpressionAttributeValues: {
				':county': { S: county },
				':state': { S: state },
				':showACI': { BOOL: false },
			},
		};

		if (lastKey) {
			queryObj.ExclusiveStartKey = lastKey;
		}

		const communities = await this.dynamoDb.query(queryObj);

		return communities;
	}

	async getCommunity(slug) {
		const community = await this.dynamoDb.query({
			TableName: this.tblCommunities,
			KeyConditionExpression: 'CommunitySlug = :community',
			FilterExpression: 'ShowACI <> :showACI',
			ExpressionAttributeValues: {
				':community': { S: slug },
				':showACI': { BOOL: false },
			},
			Limit: 1,
		});

		return community.Items[0];
	}
}

const { Client } = require('pg');

let client = null;
let connected = false;

function getClient() {
	if (!client) {
		client = new Client({
			user: process.env.PG_USER,
			host: process.env.PG_HOST,
			database: process.env.PG_DB,
			password: process.env.PG_PWD,
			port: process.env.PG_PORT,
		});
	}
	return client;
}

async function ensureConnected() {
	if (!connected && process.env.PG_HOST && process.env.PG_PWD) {
		try {
			await getClient().connect();
			connected = true;
			console.log('Connected to the database');
		} catch (err) {
			console.error('Could not connect to postgres', err);
		}
	}
}

module.exports = {
	query: async (text, params) => {
		try {
			await ensureConnected();
			if (!connected) return null;
			const result = await getClient().query(text, params);
			return result;
		} catch (e) {
			console.error(e.stack);
			return null;
		}
	},
};

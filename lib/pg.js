const { Client } = require('pg');

const client = new Client({
	user: process.env.PG_USER,
	host: process.env.PG_HOST,
	database: process.env.PG_DB,
	password: process.env.PG_PWD,
	port: process.env.PG_PORT,
});

client.connect(function (err) {
	if (err) {
		return console.error('Could not connect to postgres', err);
	}

	console.log('Connected to the database');
});

module.exports = {
	query: (text, params) =>
		client
			.query(text, params)
			.then((result) => result)
			.catch((e) => console.error(e.stack)),
};

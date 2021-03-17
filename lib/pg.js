const { Client } = require('pg');

const client = new Client({
	user: 'navi',
	host: '185.148.129.247',
	database: 'public-adjuster',
	password: 'n5t]/%TM^aZ,%/eX',
	port: 5432,
});

client.connect();

module.exports = {
	query: (text, params) => client.query(text, params),
};

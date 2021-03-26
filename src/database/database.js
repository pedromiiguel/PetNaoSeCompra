const pg = require('pg');
const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'projetoppi',
  password: '7511',
  port: 5432
});

client.connect()


module.exports = client;
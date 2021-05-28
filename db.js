const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'phil',
  host: 'localhost',
  database: 'netrunner',
  password: 'phil',
  port: 5432,
});

module.exports = pool;
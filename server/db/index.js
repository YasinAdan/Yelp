const { Pool } = require('pg');

// connect to pg db
const pool = new Pool();


module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
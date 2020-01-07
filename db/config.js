const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT
});
/*
pool.connect(err => {
  if (err) {
    console.log("Connection Error!!", err.stack);
  } else {
    console.log("Connection!!");
  }
});

pool.end(err => {
  console.log("pool has disconnected");
  if (err) {
    console.log("error during disconnection", err.stack);
  }
});
*/
module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params, (err, res) => {
      callback(err, res);
    });
  },
  getClient: callback => {
    pool.connect((err, client, done) => {
      callback(err, client, done);
    });
  }
};

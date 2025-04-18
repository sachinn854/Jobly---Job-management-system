"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

console.log("Connecting to database with URI:", getDatabaseUri());

const db = new Client({
  connectionString: getDatabaseUri(),
});

db.connect()
  .then(() => console.log("Successfully connected to database"))
  .catch(err => console.error("Database connection error:", err));

module.exports = db;

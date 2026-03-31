const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {

  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS candidates (
    id INTEGER PRIMARY KEY,
    name TEXT,
    status TEXT,
    client_id INTEGER
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY,
    name TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS activities (
    id INTEGER PRIMARY KEY,
    description TEXT,
    candidate_id INTEGER
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS access_requests (
    id INTEGER PRIMARY KEY,
    user TEXT,
    status TEXT
  )`);

});

module.exports = db;
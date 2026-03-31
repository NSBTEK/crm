const db = require('../db');

exports.getAll = (cb) => db.all("SELECT * FROM clients", cb);

exports.create = (data, cb) => {
  db.run("INSERT INTO clients (name) VALUES (?)", [data.name], cb);
};
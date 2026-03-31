const db = require('../db');

exports.getAll = (cb) => db.all("SELECT * FROM candidates", cb);

exports.create = (data, cb) => {
  db.run(
    "INSERT INTO candidates (name, status, client_id) VALUES (?, ?, ?)",
    [data.name, data.status, data.client_id],
    cb
  );
};
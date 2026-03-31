const db = require('../db');

exports.getAll = (cb) => db.all("SELECT * FROM access_requests", cb);

exports.create = (data, cb) => {
  db.run(
    "INSERT INTO access_requests (user, status) VALUES (?, ?)",
    [data.user, data.status],
    cb
  );
};
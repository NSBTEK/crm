const db = require('../db');

exports.create = (data, cb) => {
  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [data.username, data.password],
    cb
  );
};
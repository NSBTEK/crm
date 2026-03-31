const db = require('../db');

exports.getAll = (cb) => db.all("SELECT * FROM activities", cb);

exports.create = (data, cb) => {
  db.run(
    "INSERT INTO activities (description, candidate_id) VALUES (?, ?)",
    [data.description, data.candidate_id],
    cb
  );
};
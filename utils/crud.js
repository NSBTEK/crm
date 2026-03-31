const db = require('../db');

exports.getAll = (table, query, res) => {
  let sql = `SELECT * FROM ${table}`;
  const keys = Object.keys(query);
  const values = Object.values(query);

  if (keys.length) {
    sql += " WHERE " + keys.map(k => `${k}=?`).join(" AND ");
  }

  db.all(sql, values, (e, r) => res.json(r));
};

exports.create = (table, data, res) => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  const sql = `
    INSERT INTO ${table} (${keys.join(",")})
    VALUES (${keys.map(() => "?").join(",")})
  `;

  db.run(sql, values, () => res.send("Created"));
};
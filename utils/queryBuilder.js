function buildQuery(base, query) {
  let sql = base;
  const values = [];

  const filters = Object.keys(query);

  if (filters.length > 0) {
    sql += " WHERE ";
    sql += filters.map(key => {
      values.push(query[key]);
      return `${key} = ?`;
    }).join(" AND ");
  }

  return { sql, values };
}

module.exports = buildQuery;
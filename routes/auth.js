const router = require('express').Router();
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// register
router.post('/register', async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);

  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [req.body.username, hash],
    () => res.send("Registered")
  );
});

// login
router.post('/login', (req, res) => {
  db.get(
    "SELECT * FROM users WHERE username=?",
    [req.body.username],
    async (e, user) => {
      const valid = await bcrypt.compare(req.body.password, user.password);
      if (!valid) return res.send("Wrong");

      const token = jwt.sign({ id: user.id }, "SECRET");
      res.json({ token });
    }
  );
});

module.exports = router;
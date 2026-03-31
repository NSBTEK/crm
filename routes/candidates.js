const router = require('express').Router();
const model = require('../models/candidates');

router.get('/', (req, res) => {
  model.getAll((e, r) => res.json(r));
});

router.post('/', (req, res) => {
  model.create(req.body, () => res.send("OK"));
});

module.exports = router;
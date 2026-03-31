const router = require('express').Router();
const crud = require('../utils/crud');

// GET with filters
router.get('/:entity', (req, res) => {
  crud.getAll(req.params.entity, req.query, res);
});

// CREATE
router.post('/:entity', (req, res) => {
  crud.create(req.params.entity, req.body, res);
});

module.exports = router;
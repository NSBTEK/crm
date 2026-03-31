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

// UPDATE
router.put('/:entity/:id', (req, res) => {
  crud.update(req.params.entity, req.params.id, req.body, res);
});

// DELETE
router.delete('/:entity/:id', (req, res) => {
  crud.remove(req.params.entity, req.params.id, res);
});

module.exports = router;
const express = require('express');
const {
  createCase,
  getCases,
  updateCase
} = require('../controllers/caseController');

const router = express.Router();

router.post('/', createCase);
router.get('/', getCases);
router.patch('/:id', updateCase);

module.exports = router;

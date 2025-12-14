const express = require('express');
const router = express.Router();
const { calculate } = require('../core/crs/calculate');

router.post('/calculate', (req, res) => {
  const result = calculate(req.body);
  res.json(result);
});

module.exports = router;


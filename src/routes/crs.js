const express = require('express');
const router = express.Router();
const { success } = require('../lib/response');
const { calculate } = require('../core/crs/calculate');

router.post('/calculate', (req, res) => {
  const result = calculate(req.body);
  success(res, result);
});

module.exports = router;


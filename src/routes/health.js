const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    result: { ok: true },
    reasons: [],
    assumptions: [],
    ruleVersion: 'v0'
  });
});

module.exports = router;


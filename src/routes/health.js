const express = require('express');
const { success } = require('../lib/response');
const router = express.Router();

router.get('/', (req, res) => {
  success(res, { ok: true });
});

module.exports = router;


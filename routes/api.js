const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  const data = {test: 'true'};
  // Return json
  res.json(data);
});

module.exports = router;

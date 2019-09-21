var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  const data = {test: true};
  // Return json
  res.json(data);
});

module.exports = router;

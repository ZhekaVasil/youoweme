const express = require('express');
const router = express.Router();
const { models } = require('../models');

/* GET users listing. */
router.get('/users', async (req, res, next) => {
  try {
    const data = await models.User.findByEmail('eugene.vasilevsky@gmail.com');
    // Return json
    res.json(data || {});
  } catch (error) {
    console.log(error);
    res.json({error});
  }
});

module.exports = router;

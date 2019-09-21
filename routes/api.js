const express = require('express');
const router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.get('/users', async (req, res, next) => {
  try {
    const data = await User.findByEmail('eugene.vasilevsky@gmail.com');
    // Return json
    res.json(data || {});
  } catch (error) {
    console.log(error);
    res.json({error});
  }
});

module.exports = router;

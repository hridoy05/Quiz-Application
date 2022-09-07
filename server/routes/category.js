const express = require('express');
const router = express.Router();

// middleware
const { requireSignin, isAdmin } = require('../middlewares');
// controllers
const { create } = require('../controllers/categoryController');

router.post('/category', requireSignin, isAdmin, create);

module.exports = router;

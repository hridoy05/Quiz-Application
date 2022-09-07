const express = require('express');

const router = express.Router();

// controllers
const { signup, signin } = require('../controllers/authController');

router.get('/', (req, res) => {
    return res.json({
        data: 'hello world from kaloraat auth API',
    });
});
router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;

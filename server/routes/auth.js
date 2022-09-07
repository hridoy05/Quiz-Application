const express = require('express');

const router = express.Router();

// controllers
const { signup, signin, currentUser } = require('../controllers/authController');
const { requireSignin, isAdmin } = require('../middleware');

router.get('/', (req, res) => {
    return res.json({
        data: 'hello world from kaloraat auth API',
    });
});
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/current-admin', requireSignin, isAdmin, currentUser);

module.exports = router;

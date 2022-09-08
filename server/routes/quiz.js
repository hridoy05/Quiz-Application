const express = require('express');
const router = express.Router();

// middleware
const { requireSignin, isAdmin } = require('../middleware');
// controllers
const { quizCreate, singleQuiz, quizes } = require('../controllers/quizController');

router.post('/quiz', requireSignin, isAdmin, quizCreate);
router.get('/quizes', quizes);
router.get('/quiz/:slug', requireSignin, singleQuiz);
module.exports = router;

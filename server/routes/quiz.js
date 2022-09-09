const express = require('express');
const router = express.Router();

// middleware
const { requireSignin, isAdmin } = require('../middleware');
// controllers
const {
    quizCreate,
    singleQuiz,
    quizes,
    checkEnrollment,
    freeEnrollment,
    paidEnrollment,
    stripeSuccess,
} = require('../controllers/quizController');

router.post('/quiz', requireSignin, isAdmin, quizCreate);
router.get('/quizes', quizes);
router.get('/quiz/:slug', requireSignin, singleQuiz);

router.get('/check-enrollment/:courseId', requireSignin, checkEnrollment);

// enrollment
router.post('/free-enrollment/:courseId', requireSignin, freeEnrollment);
router.post('/paid-enrollment/:courseId', requireSignin, paidEnrollment);
router.get('/stripe-success/:courseId', requireSignin, stripeSuccess);
module.exports = router;

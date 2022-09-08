const express = require('express');

const router = express.Router();

// controllers
const {
    createUser,
    updateUser,
    updateUserByAdmin,
    users,
    removeUser,
    getUser,
    currentUser,
} = require('../controllers/userController');
const { requireSignin, isAdmin } = require('../middleware');
router.get('/current-admin', requireSignin, isAdmin, currentUser);
router.get('/current-user', requireSignin, currentUser);
router.post('/create-user', requireSignin, isAdmin, createUser);
router.put('/update-user', requireSignin, updateUser);
router.put('/update-user-by-admin', requireSignin, isAdmin, updateUserByAdmin);
router.get('/users', requireSignin, isAdmin, users);
router.delete('/user/:userId', requireSignin, isAdmin, removeUser);
router.get('/user/:userId', requireSignin, getUser);

module.exports = router;

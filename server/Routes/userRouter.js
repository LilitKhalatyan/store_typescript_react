const express = require('express');
const auth = require('../Middlewares/auth');
const userController = require('../Controllers/userController');
const { signup, login } = userController;

const router = express.Router();

router.post('/auth/signup', auth.saveUser, signup);
router.post('/auth/login', login);

module.exports = router;
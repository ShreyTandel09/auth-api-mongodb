const express = require('express');
const router = express.Router();
const Joi = require('joi');

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Controller
const authController = require('../controllers/authController')

// Route for user registration
router.post('/register', authController.registerHandle);
//Verify User
router.get('/verify-email', authController.verifyEmail);
//login 
router.post('/login', authController.loginHandle);
//refresh-token
router.post('/refresh-token', authController.refreshTokenHandle);

//forget-password
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);



module.exports = router;

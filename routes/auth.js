/* ***Node js Ecommerce Site
 *** Md. Arman Shanto
 *** Date: 06.12.2020 */

// dependendcies loading
const express = require('express');
const {userSignupValidator} = require('../validator');

const router = express.Router();
const { signup, signin, signout, requireSignin } = require('../controllers/auth');

// route
router.post('/signup',userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;

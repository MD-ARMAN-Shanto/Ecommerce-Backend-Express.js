const express = require("express");
const router = express.Router();
const { requireSignin, isAuth } = require('../controllers/auth');
const { create } = require("../controllers/order");


router.post('/order/create/:userId', requireSignin, isAuth, create)

const { userById } = require('../controllers/user');


router.param('userId', userById)

module.exports = router
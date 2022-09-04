var express = require('express');

var router = express.Router();

var doctorRouter = require('./doctor');

var reportRouter = require('./report');

var userRouter = require('./user');

router.use('/user', userRouter);
router.use('/doctor', doctorRouter);
router.use('/report', reportRouter);

module.exports = router;

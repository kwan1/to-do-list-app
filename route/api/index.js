const express = require('express');
const router = express.Router();
const todoRoute = require('./todo');


router.use('/list', todoRoute);

module.exports = router;

//localhost:3000/api/todo
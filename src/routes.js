const router = require('express').Router();

const signup = require('./controllers/signup');

router.use('/', signup);

module.exports = router;

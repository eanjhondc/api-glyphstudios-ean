const { body, query, param } = require('express-validator');
const Album = require('../controllers/signup');

module.exports = {
  createUser: [
    body('first_name')
    .notEmpty()
    .withMessage('First name must not contain profanities')
  ],
  
}
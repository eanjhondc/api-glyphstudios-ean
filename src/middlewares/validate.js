const { validationResult } = require('express-validator');
const { response, VALIDATION_ERROR } = require('../core/response');
const fs = require('fs')

module.exports = function(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.error(response(VALIDATION_ERROR, '', errors));
};

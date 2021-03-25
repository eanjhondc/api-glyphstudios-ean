const logger = require('../core/logger');
const { v4: uuidv4 } = require('uuid');

module.exports = function() {
  return function(req, res, next) {
    res.success = function(response) {
      logger.log('info', `[${res.req.method}][${req.originalUrl}]`, response);
      res.status(response.status).json(response.body);
    };

    res.error = function(error) {
      const errorId = uuidv4();
      logger.log('error', `${errorId} [${res.req.method}][${req.originalUrl}]`, error);
      res.status(error.status).json({id: errorId, ...error.body});
    };

    next();
  };
};
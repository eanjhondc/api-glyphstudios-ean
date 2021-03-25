const express = require('express');
const cors = require('cors')
const { response, ENDPOINT_NOT_FOUND } = require('./src/core/response');
const mwResponse = require('./src/middlewares/response');
const mwHttpLogger = require('./src/middlewares/httpLogger');
const apiRoutes = require('./src/routes');
const app = express();

// Setup middleware for parsing application/json
app.use(express.json());
//Set cross platform calls
app.use(cors())
// Setup middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Setup basic security emplementations
//app.use(helmet());

// Setup HTTP request logger middleware
app.use(mwHttpLogger());

// Setup API success/error handler middleware
app.use(mwResponse());

let d = new Date();

app.get('/', (req, res) => {
  res.status(200).send(`Healthy since ${d.toString()}`);
});

app.use('/v1/glyphstudios', apiRoutes);

/**
 * Versioning of routes
 * app.use('/v2', apiRoutesv2);
 */
app.use('*', function(req, res) {
  res.error(response(ENDPOINT_NOT_FOUND));
});

module.exports = app;
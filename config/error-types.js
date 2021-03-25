module.exports = {
    INTERNAL_SERVER_ERROR: {
      status: 500,
      body: {
        code: -1,
        message: 'Internal server error.'
      }
    },
    NOT_FOUND: {
      status: 404,
      body: {
        code: -2,
        message: 'Not found.'
      }
    },
    UNAUTHORIZED: {
      status: 401,
      body: {
        code: -3,
        message: 'Unauthorized'
      }
    },
    ENDPOINT_NOT_FOUND: {
      status: 404,
      body: {
        code: -8,
        message: 'Endpoint not found.'
      }
    },
    BAD_REQUEST: {
      status: 400,
      body: {
        code: -10,
        message: 'Bad request'
      }
    },
    VALIDATION_ERROR: {
      status: 422,
      body: {
        code: -11,
        message: 'Missing or invalid inputs.'
      }
    } 
};
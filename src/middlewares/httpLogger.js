const morgan = require('morgan');

morgan.token('date', function() {
  const p = new Date()
    .toString()
    .replace(/[A-Z]{3}\+/, '+')
    .split(/ /);
  return p[2] + '/' + p[1] + '/' + p[3] + ':' + p[4] + ' ' + p[5];
});

module.exports = function() {
  return morgan(
    ':remote-addr | :remote-user | :date | HTTP/:http-version | :status | :req[header] | :res[content-length] | ":referrer" | ":user-agent" | :response-time ms'
  );
};

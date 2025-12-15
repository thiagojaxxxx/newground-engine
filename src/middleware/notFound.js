const { error } = require('../lib/response');

function notFound(req, res, next) {
  error(res, 'NOT_FOUND', `Route ${req.method} ${req.path} not found`, 404);
}

module.exports = notFound;


function success(res, data, statusCode = 200) {
  const requestId = res.locals.requestId || 'unknown';
  res.status(statusCode).json({
    ok: true,
    requestId,
    data
  });
}

function error(res, code, message, statusCode = 500) {
  const requestId = res.locals.requestId || 'unknown';
  res.status(statusCode).json({
    ok: false,
    requestId,
    error: {
      code,
      message
    }
  });
}

module.exports = { success, error };


const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 404;
  if (statusCode === 404) {
    res.json({
      title: "Not Found",
      message: err.message,
      stackTrace: err.stack,
    });
  }
};
module.exports = errorHandler;

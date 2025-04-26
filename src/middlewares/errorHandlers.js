const globalErrorHandler = (err, req, res, next) => {
  console.error("Error:", err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Something went wrong!";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = globalErrorHandler;

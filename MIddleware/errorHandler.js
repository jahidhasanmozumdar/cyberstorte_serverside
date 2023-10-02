const { constant } = require("../constant");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.json("validation Error", {
        massage: err.massage,
        stackTrace: err.stackTrace,
      });
      break;
    case constant.NOT_FOUND:
      res.json("Not found", {
        massage: err.massage,
        stackTrace: err.stack,
      });
      break;
    case constant.UNAUTHORIZE:
      res.json("UNAUTHORIZE", {
        massage: err.massage,
        stackTrace: err.stack,
      });
      break;
    case constant.FORBIDDEN:
      res.json("FORBIDDEN", {
        massage: err.massage,
        stackTrace: err.stack,
      });
      break;
    case constant.SERVER_ERROR:
      res.json("SERVER_ERROR", {
        massage: err.massage,
        stackTrace: err.stack,
      });
    default:
      console.log("No error server is good running");
      break;
  }
};

module.exports = errorHandler;

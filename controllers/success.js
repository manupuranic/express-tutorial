const rootDir = require("../utils/path");
const path = require("path");

exports.postSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};

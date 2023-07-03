const rootDir = require("../utils/path");
const path = require("path");
exports.getContactUs = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

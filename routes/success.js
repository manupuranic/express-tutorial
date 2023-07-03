const path = require("path");

const express = require("express");
const router = express.Router();

const rootDir = require("../utils/path");

router.post("/success", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;

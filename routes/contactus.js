const path = require("path");

const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contact");

router.get("/contactus", contactController.getContactUs);

module.exports = router;

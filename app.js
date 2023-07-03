const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contactus");
const successRouter = require("./routes/success");
const rootDir = require("./utils/path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRouter);
app.use(contactRouter);
app.use(successRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);

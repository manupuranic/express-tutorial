const http = require("http");

const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("inside a middleware");
  next();
});

app.use((req, res, next) => {
  console.log("inside another middleware");
  const obj = {
    key1: "value",
  };
  //   res.send("<h1>Hello from Express!</h1>")
  res.send(obj);
});

app.listen(4000);

"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8082;

app.use(function (req, res) {
  res.end("test");
});
app.listen(port);   
console.log("Server started on port " + port);

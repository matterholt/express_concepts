"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require("express");
// require("dotenv").config();
var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("Hello World! this will build");
});
var port = process.env.PORT;
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});
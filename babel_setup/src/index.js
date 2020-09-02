// const express = require("express");
import express from "express";
// require("dotenv").config();
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! this will build");
});

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

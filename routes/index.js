var express = require("express");
var router = express.Router();
const projectsAPI = require("./api/projects");
const userAPI = require("./api/user");
const feaRequestAPI = require("./api/fearequest");
const feaResultsAPI = require("./api/results");
const projectGroupAPI = require("./api/projectGroup");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

//module.exports = router;
module.exports = {
  projectsAPI,
  userAPI,
  feaRequestAPI,
  feaResultsAPI,
  projectGroupAPI
};

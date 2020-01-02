var express = require("express");
var router = express.Router();
const projectsAPI = require("./api/projects");
const userAPI = require("./api/user")

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

//module.exports = router;
module.exports = {
  projectsAPI,
  userAPI
};

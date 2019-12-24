const express = require("express");
const router = express.Router();
const db = require("../db/config");

const getProjects = (req, res) => {
  db.query("SELECT * FROM projects ORDER BY project_id ASC", (err, results) => {
    if (err) {
      return next(err);
    }
    const projectlist = results.rows;
    res.render("project", { title: "projects", data: projectlist });
  });
};

const createNewProject = (req, res) => {
  res.render("newProject");
};

// create new project by creating a post,

module.exports = {
  getProjects,
  createNewProject
};

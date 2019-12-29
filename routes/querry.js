const express = require("express");
const router = express.Router();
const db = require("../db/config");

// get the main project page
const getProjects = (req, res) => {
  db.query("SELECT * FROM projects ORDER BY project_id ASC", (err, results) => {
    if (err) {
      return next(err);
    }
    const projectlist = results.rows;
    res.render("project", {
      title: "projects",
      data: projectlist
    });
  });
};
// get the project details, so select return one by id
const updateDetailsProject = (req, res) => {
  // fetch group members , have to async
  const id = parseInt(req.params.id);
  db.query(
    "SELECT * from projects WHERE project_id=$1",
    [id],
    (err, results) => {
      if (err) {
        throw err;
      }

      //res.status(200).json(results.rows);
      res.render("update_project", {
        title: "Project detail",
        data: results.rows[0]
      });
    }
  );
};
const NewProjectPage = (req, res) => {
  res.render("newProject");
};
const createNewProject = (req, res) => {
  const { partCode, partDev } = req.body;
  db.query(
    "INSERT INTO projects(code, part) VALUES($1, $2)",
    [partCode, partDev],
    (error, results) => {
      if (error) {
        throw error;
      }
      //res.status(201).send(`User added with ID: ${result.insertId}`);
      res.redirect("/projects");
    }
  );
};

// create new project by creating a post,
const deleteProject = (req, res) => {
  const id = parseInt(req.params.id);

  db.query("DELETE FROM projects WHERE project_id=$1", [id], (err, results) => {
    if (err) {
      throw err;
    }
    //res.status(200).send(`project ${id} has been removed`);
    res.redirect("/projects");
  });
};
module.exports = {
  getProjects,
  NewProjectPage,
  createNewProject,
  updateDetailsProject,
  deleteProject
};

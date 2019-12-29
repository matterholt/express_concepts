var express = require("express");
var router = express.Router();
const db = require("../db/config");

// @route GET /projects/
// @desc  GEt all projects to list
// @access project lead
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM projects ORDER BY project_id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      const projectList = results.rows;
      //res.send(projectList);
      res.status(200).json(results.rows);
      //res.render("project", {
      //  title: "projects",
      //  data: projectList
      //});
    }
  );
});

// @route GET /projects/:id
// @desc get id details of id  projects
// @access project lead
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM projects WHERE project_id=$1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      // res.send(results.rows[0]);
      res.render("update_project", {
        title: "Project detail",
        data: results.rows[0]
      });
    }
  );
});

// @route  POST /project/newproject
// @desc   add new project to the database
// @access project lead 
router.post("/newproject", (req, res) => {
  const { partCode, partDev } = req.body;
  db.query(
    "INSERT INTO projects(code, part) VALUES($1, $2)",
    [partCode, partDev],
    (error, results) => {
      if (error) {
        throw error;
      }
      res
        .status(201)
        .send(
          `project ${partCode} for the ${partDev} has been added to database`
        );
    }
  );
});

// @route  DELETE /projects/:id
// @desc   delete project from data base
// @access private
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "DELETE FROM projects WHERE project_id = $1",
    [id],
    (error, results) => {
      res.status(200).send(`project has been remove ${id}`);
    }
  );
});

// create
module.exports = router;

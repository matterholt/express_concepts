// route to CRUD the coordinate projects and users assign to projects
const express = require("express");
const router = express.Router();

const db = require("../../db/config");

// @desc join project table and user
// reduce return => link_id,dev_code,part_develop,production,user_id,email,username,user_role
router.get("/all", (req, res) => {
  db.query(
    `
    SELECT *
    from link_user_project
    INNER JOIN projects on projects.project_ID  = link_user_project.project_code
    INNER JOIN users ON users.user_ID = link_user_project.member
    ORDER BY link_id ASC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

// get user to group, will have the ids of project and
router.get("/", (req, res) => {
  db.query(
    `
    SELECT link_id,member,username,project_code,dev_code,part_develop
    FROM link_user_project
        INNER JOIN projects on projects.project_ID  = link_user_project.project_code
    INNER JOIN users ON users.user_ID = link_user_project.member
    ORDER BY link_id ASC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

// assign users to project -> might be a better on the project page
router.post("/addMember", (req, res) => {});
//

module.exports = router;

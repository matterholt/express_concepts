const express = require("express");
const router = express.Router();

const db = require("../../db/config");

// @route GET /projects/
// @desc  GEt all projects to list
// @access project lead
router.get("/", (req, res) => {
  db.query("SELECT * FROM projects ORDER BY project_ID ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});


// @route GET /projects/:id
// @desc get id details of id  projects
// @access project lead
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query(" SELECT * FROM projects WHERE project_ID=$1", 
  [id], 
  (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
 /*
     * server-side application 
     * res.render("update_project", {
        title: "Project detail",
        data: results.rows[0]
*/
  });
});

// @route  DELETE /projects/:id
// @desc   delete project from data base
// @access private
router.delete("/:id/delete",(req,res)=>{
    const { id } = req.params;

    db.query(
      "DELETE FROM projects WHERE project_id = $1",
      [id],
      (error, results) => {
        res.status(200).send(`project has been remove ${id}`);
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
      res.status(201).send(`Part ${partCode} has been added`);
  });
});

// @route PUT /project/id/update
// @desc  update projects and currently not fully developed should have more to add
// @access project lead
router.put("/:id/update",(req,res)=>{
    // should update password separate from 
    const {id } = req.params
    const {dev_code, part_develop  } = req.body
    db.query(`
    UPDATE users SET dev_code = $1, part_develop = $2 WHERE user_ID = $3`,
  
    [dev_code, part_develop, id], (error,results)=>{
      if (error){
        throw error
      }
      res.status(200).send(`Project has ${dev_code} has been updated`)
    })
  })

// @route GET /project/id/update
// @desc gets info of the projects
// @access public
router.get("/:id/details",(req,res)=>{
    const {id} = req.params;
    db.query(` SELECT 
        username,
        firstname,
        email,
        dev_code,
        part_develop,
        user_role
        FROM link_user_project
        INNER JOIN projects on projects.project_ID  = link_user_project.project_code
        INNER JOIN users on users.user_ID  = link_user_project.member
        WHERE link_user_project.project_code = $1`,
    [id], (error,results)=>{
      if (error){
        throw error;
      }
      res.status(200).json(results.rows)
    })
  })


module.exports = router;

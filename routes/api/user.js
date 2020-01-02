const express = require("express");
const router = express.Router();

const db = require("../../db/config");

// get all
router.get("/", (req, res) => {
  db.query("SELECT * FROM users ORDER BY user_ID ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// get by id
router.get("/:id", (req, res) => {
  // details, projects that are working on
  const { id } = req.params;
  db.query(" SELECT * FROM users WHERE user_ID=$1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
  });
});
router.get("/:id/project",(req,res)=>{
  const {id} = req.params;
  db.query(`SELECT dev_code,part_develop,email, username ,user_role
  FROM link_user_project
  INNER JOIN projects on projects.project_ID  = link_user_project.project_code
  INNER JOIN users on users.user_ID = link_user_project.member
  WHERE link_user_project.member = $1`,
  [id], (error,results)=>{
    if (error){
      throw error;
    }
    res.status(200).json(results.rows)
  })
})

// delete 
router.delete("/:id/delete",(req,res)=>{
  const {id} = req.params;
  db.query('DELETE FROM users WHERE user_ID = $1', [id],(error, results)=>{
    if (error){
      throw error
    }
    res.status(200).send(`User ${id} has been removed from database`)
  })
})

// update users
router.put("/:id/update",(req,res)=>{
  // should update password separate from 
  const {id } = req.params
  const {userEmail, userPassword, userRole  } = req.body
  db.query('UPDATE users SET email = $1, user_pass = $2, user_role = $3 WHERE user_ID = $4',

  [userEmail, userPassword, userRole, id], (error,results)=>{
    if (error){
      throw error
    }
    res.status(200).send(`User has ${userEmail} has been updated`)
  })
})

// create user
router.post("/newuser", (req, res) => {
  const { userEmail, userPassword, userRole } = req.body;
  //!! TODO: hash out password
  // how to validate email, better to send a custom email like notion ()
  // add Username, (update sql file )
  const usersGroupRole = ['D1', 'V2', 'LEAD'];

  db.query('INSERT INTO users (email, user_pass, user_role) VALUES($1, $2, $3)',[userEmail, userPassword, userRole],(error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Email ${userEmail} has been added`);
  });
});


module.exports = router;

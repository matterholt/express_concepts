const express = require("express");
const router = express.Router();

const db = require("../../db/config");

// @route GET /feaResults/
// @desc gets all the columns from the results db
// @access restricted, only the V2 group should be allow to modified
router.get("/", (req, res) => {
  db.query(
    `SELECT * FROM results ORDER BY analysis_id ASC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

// @route GET /feaResults/:id
// @desc get results by specific id
// @access restricted, only the V2 group should be allow to modified
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM results WHERE analysis_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows[0]);
    }
  );
});

// @route POST /feaResults/:id/add
// @desc creation for the results, create on the submission of request
// @access all
// !! as requester is filling out request, sends a second another PUT method
router.post("/:id/add", (req, res) => {
  const { id } = req.params;
  const { analysisPerform } = req.body;
  db.query(
    `INSERT INTO results (analysis_perform, request_ID) VALUES ($1 , $2)`,
    [analysisPerform, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Request ${analysisPerform} has been created`);
    }
  );
});

// update
// @route PUT /feaResults/:id/update
// @desc update results with the judgment and completions checks
// @access v2 group
router.put("/:id/update", (req, res) => {
  const { id } = req.params;
  const { analysisPerform, judgment, published, checked } = req.body;
  db.query(
    `UPDATE results SET 
  analysis_perform =$1,
  judgement =$2,
  published  =$3,
  checked  =$4
  WHERE analysis_id = $5`,
    [analysisPerform, judgment, published, checked, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Result ${id} has been update`);
    }
  );
});

// @route DELETE /feaResults/:id/delete
// @desc remove results from the db, should be restricted
// @access v2admin or lead
router.delete("/:id/delete", (req, res) => {
  const { id } = req.params;
  db.query(
    `DELETE FROM results WHERE analysis_id=$1`,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Results ${id} have been removed`);
    }
  );
});

module.exports = router;

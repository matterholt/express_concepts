const express = require("express");
const router = express.Router();

const db = require("../../db/config");

// @route GET /api/feaRequest
// @desc grab fea request that are within the database
// @access all access.
router.get("/", (req, res) => {
  db.query(
    `SELECT * FROM feaRequest ORDER BY request_ID ASC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

// @route GET  /api/feaRequest/:ID
// @ desc gets one fea request from the db, able to grab the requester name and code
// @ access group members, and leads
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM feaRequest WHERE request_id=$1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

// @route POST /api/feaRequest/:ID/newrequest
// @desc creates a new fea request and
// @access all public
router.post("/newrequest", (req, res) => {
  const {
    versionName,
    baseOn,
    modelWeight,
    modelDescription,
    changeList,
    analysisPerform
  } = req.body;
  const projectCode = 2; // INFO WILL HAVE TO BE OBTAIN BY USER SIGNED IN
  const feaRequester = 2; // INFO WILL HAVE TO BE OBTAIN BY USER SIGNED IN

  db.query(
    `INSERT INTO feaRequest 
    (version_name,
        base_on,
        weight_kg,
        purpose,
        changelog,
        perform_analysis,
        project_code,
        requester
        )  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      versionName,
      baseOn,
      modelWeight,
      modelDescription,
      changeList,
      analysisPerform,
      projectCode,
      feaRequester
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      const amountOfChange = changeList.split(",").length;
      res
        .status(200)
        .send(` Fea request model ${versionName}, and has ${amountOfChange} `);
    }
  );
});

// @route PUT /api/feaRequest/:id/update
// @desc updates should be limited, HAVE TO THINK ABOUT HOW AND WHAT
// @access only should be the user that has requested it??
router.put("/:id/update", (req, res) => {
  const { id } = req.params;
  // should not change once submitted versionName and baseOn
  const {
    modelWeight,
    modelDescription,
    changeList,
    analysisPerform
  } = req.body;
  db.query(
    `
  UPDATE feaRequest SET
  weight_kg= $1,
  purpose= $2,
  changelog= $3,
  perform_analysis = $4
  WHERE analysis_ID = $5
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `,
    [modelWeight, modelDescription, changeList, analysisPerform, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`FEA request ${versionName} has been updated `);
    }
  );
});

// @route DELETE /api/feaRequest/:id/delete
// delete
router.delete("/:id/delete", (req, res) => {
  const { id } = req.params;
  db.query(
    `DELETE FROM fearequest WHERE analysis_ID=$1`,
    [id],
    (error, results) => {
      res.status(200).send(`project has been remove ${id}`);
    }
  );
});

module.exports = router;

import { Router } from "express";

import { Sequelize } from "sequelize";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World! from request");
});

export default router;

import { Router } from "express";

const router = Router();

// get Object values which is the users
router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});
// define the route to a userID
router.get("/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;

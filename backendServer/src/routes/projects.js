// bring in the model
import { models } from "../models/index";

async function getAll(req, res) {
  const users = await models.user.findAll();
  res.status(200).json(users);
}

module.exports = {
  getAll,
};

// bring in the model
import { models } from "../models/index";
import { getIdParam } from "../utils/helper";

async function getAll(req, res) {
  const users = await models.request.findAll();
  res.status(200).json(users);
}
async function getById(req, res) {
  const id = getIdParam(req);
  const user = await models.request.findByPk(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("404 -  User Not Found!");
  }
}
async function create(req, res) {
  if (req.body.id) {
    res
      .status(400)
      .send(
        `Bad request: ID should not be provided, since it is determined automatically by the database.¸¸`
      );
  } else {
    await models.request.create(req.body);
    res.status(201).end();
  }
}
async function update(req, res) {
  const id = getIdParam(req);
  if (req.body.id === id) {
    await models.request.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(200).end();
  } else {
    res
      .status(400)
      .send(
        `Bad request: param ID (${id}) does not match body ID (${req.body.id}).`
      );
  }
}
async function remove(req, res) {
  const id = getIdParam(req);
  await models.request.destroy({
    where: { id: id },
  });
  res.status(200).end();
}
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

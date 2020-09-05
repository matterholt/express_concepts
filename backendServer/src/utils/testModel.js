import User from "../models/user";
import { Sequelize } from "sequelize";

const db_connection = new Sequelize({
  dialect: "sqlite",
  storage: "db/main.sqlite",
});

async function userBulkAdd() {
  await User.sync({
    force: true,
  });
  console.log("The table for the User model was just (re)created!");

  await User.bulkCreate([
    {
      name: "Felipe",
      email: "Felipe@example.com",
      simplePass: "felipe",
      role: "designer",
    },
    {
      name: "James",
      email: "James@example.com",
      simplePass: "james",
      role: "v2 engineer",
    },
    {
      name: "Abhi",
      email: "Abhi@example.com",
      simplePass: "abhi",
      role: "manager",
    },
    {
      name: "Matt",
      email: "Matt@example.com",
      simplePass: "matt",
      role: "admin",
    },
  ]);
  const allUsers = await User.findAll();
  console.log(allUsers);
}
userBulkAdd();

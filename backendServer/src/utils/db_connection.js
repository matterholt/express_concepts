import { Sequelize } from "sequelize";

export const db_connection = new Sequelize({
  dialect: "sqlite",
  storage: ".db/main.sqlite",
});

import { Sequelize } from "sequelize";

import feaRequest from "./feaRequest";
import user from "./user";

const db_connection = new Sequelize({
  dialect: "sqlite",
  storage: "db/main.sqlite",
});

feaRequest();

export default db_connection;

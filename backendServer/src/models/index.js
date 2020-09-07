import { applyAssociates } from "./associate";
import { requestModel } from "./feaRequest";
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "sqlite-example-database/example3.sqlite",
  logQueryParameters: true,
  benchmark: true,
});

const modelDefiners = [require("./user"), requestModel];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyAssociates(sequelize);

module.exports = sequelize;

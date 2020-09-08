import { applyAssociates } from "./associate";
import { requestModel } from "./feaRequest";
import { sequelize } from "../config/database";

const modelDefiners = [require("./user"), requestModel];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyAssociates(sequelize);

module.exports = sequelize;

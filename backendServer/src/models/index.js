import Sequelize from "sequelize";

const sequelize = new Sequelize({
  // future place in .env
  dialect: "sqlite",
  storage: "db/main.sqlite",
});

const models = {
  User: require("./user"),
  feaRequest: require("./feaRequest"),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});
export { sequelize };

export default models;

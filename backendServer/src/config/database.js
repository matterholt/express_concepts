const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "sqlite-example-database/example3.sqlite",
  logQueryParameters: true,
  benchmark: true,
});

export { sequelize };

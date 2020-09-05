const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "sqlite-example-database/example-db.sqlite",
  logQueryParameters: true,
  benchmark: true,
});

const modelDefiners = [require("./user")];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;

//////////////////////////////////////////////
// const modelDefiner = [
//   require("./user"),
//   FeaRequest: require("./feaRequest"),
// ];

// for (const modelDefiner of modelDefiners) {
//   modelDefiner(sequelize);
// }

// Object.keys(models).forEach((key) => {
//   if ("associate" in models[key]) {
//     models[key].associate(models);
//   }
// });
// export { sequelize };

// export default models;
// module.exports = sequelize;

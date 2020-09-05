import sequelize from "../models";

async function reset(sequelize) {
  console.log(sequelize);
  const { user, request } = sequelize.models;

  console.log(
    "Will rewrite the SQLite example database, adding some dummy data."
  );
  await sequelize.sync({ force: true });

  await user.bulkCreate([
    {
      username: "Felipe",
    },
    {
      username: "James",
    },
    {
      username: "Abhi",
    },
    {
      username: "Matt",
    },
  ]);
  const allUsers = await user.findAll();
  console.log(allUsers);

  await request.bulkCreate([
    {
      modelName: "V00R00",
    },
    {
      modelName: "V01R00",
    },
    {
      modelName: "V01R01",
    },
    {
      modelName: "V02R00",
    },
  ]);
  const allRequest = await request.findAll();
  console.log(allRequest);
}

reset(sequelize);

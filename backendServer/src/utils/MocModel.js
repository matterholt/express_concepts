import sequelize from "../models";

async function reset(sequelize) {
  console.log(sequelize);
  const { user, request } = sequelize.models;

  console.log(
    "Will rewrite the SQLite example database, adding some dummy data. \n\n\n"
  );
  try {
    await sequelize.sync({ force: true });

    await user.bulkCreate([
      {
        username: "Felipe",
        name: "Felipe D",
        simplePass: "12345",
        role: "Designer",
      },
      {
        username: "James",
        name: "James S",
        simplePass: "12345",
        role: "V2",
      },
      {
        username: "Shohei",
        name: "Shohei S",
        simplePass: "12345",
        role: "Manager",
      },
      {
        username: "Matt",
        name: "Matt A",
        simplePass: "12345",
        role: "Admin",
      },
    ]);
  } catch (err) {
    console.log(err);
  }

  const allUsers = await user.findAll();
  console.log(allUsers);
  try {
    await request.bulkCreate([
      {
        modelName: "V00R00",
        userEmployeeNumber: 1,
        analysisPerform: "stiffness",
      },
      {
        modelName: "V01R00",
        userEmployeeNumber: 1,
        analysisPerform: "durability",
      },
      {
        modelName: "V01R01",
        userEmployeeNumber: 1,
        analysisPerform: "static",
      },
      {
        modelName: "V02R00",
        userEmployeeNumber: 1,
        analysisPerform: "stiffness",
      },
    ]);
  } catch (err) {
    console.log(err);
  }

  const allRequest = await request.findAll();
  console.log(allRequest);
}

reset(sequelize);

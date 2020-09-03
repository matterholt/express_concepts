import { Sequelize } from "sequelize";

const db_connection = new Sequelize({
  dialect: "sqlite",
  storage: "db/main.sqlite",
});

async function AddBulk() {
  try {
    await userBulkAdd();
    await requestBulkAdd();
  } catch (err) {
    throw err;
  }
}
AddBulk(); // don't like this should be a better way

async function requestBulkAdd() {
  await FeaRequestModel.sync({
    force: true,
  });
  console.log("The table for the fea request model was just (re)created!");

  await FeaRequestModel.bulkCreate([
    {
      modelName: "V00R00",
      modelDescription: "make things better",
      baseModelName: "OEM",
      requestStatus: "completed",
      analysisPerform: "stiffness",
      creatorId: 11,
    },
    {
      modelName: "V01R00",
      modelDescription: "make things STRONGER",
      baseModelName: "V00R00",
      analysisPerform: "stiffness",
      creatorId: 11,
    },
    {
      modelName: "V01R01",
      modelDescription: "make things Lighter",
      baseModelName: "V01R00",
      analysisPerform: "stiffness",
      creatorId: 11,
    },
  ]);
  const allRequest = await FeaRequestModel.findAll();
  console.log(allRequest);
}

async function userBulkAdd() {
  await User.sync({
    force: true,
  });
  console.log("The table for the User model was just (re)created!");

  await User.bulkCreate([
    {
      name: "Felipe",
      employeeNumber: 11,
      email: "Felipe@example.com",
      simplePass: "felipe",
      role: "designer",
    },
    {
      name: "James",
      employeeNumber: 14,

      email: "James@example.com",
      simplePass: "james",
      role: "v2 engineer",
    },
    {
      name: "Abhi",
      employeeNumber: 12,
      email: "Abhi@example.com",
      simplePass: "abhi",
      role: "manager",
    },
    {
      name: "Matt",
      employeeNumber: 13,
      email: "Matt@example.com",
      simplePass: "matt",
      role: "admin",
    },
  ]);
  const allUsers = await User.findAll();
  console.log(allUsers);
}

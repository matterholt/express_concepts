import { Sequelize, Model, DataTypes } from "sequelize";

// import { FeaRequestModel } from "../models/db_models";

const db_connection = new Sequelize({
  dialect: "sqlite",
  storage: "db/main.sqlite",
});

const FeaRequestModel = db_connection.define("request", {
  modelName: DataTypes.STRING,
  modelDescription: DataTypes.TEXT,
  baseModelName: DataTypes.STRING,
  requestStatus: {
    type: DataTypes.TEXT,
    defaultValue: "pending",
  },
  analysisPerform: DataTypes.TEXT,
});

// User table
const User = db_connection.define("user", {
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  simplePass: DataTypes.TEXT,
  role: DataTypes.TEXT,
});

async function AddBulk() {
  await requestBulkAdd();
  await userBulkAdd();
}
AddBulk();

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
    },
    {
      modelName: "V01R00",
      modelDescription: "make things STRONGER",
      baseModelName: "V00R00",
      analysisPerform: "stiffness",
    },
    {
      modelName: "V01R01",
      modelDescription: "make things Lighter",
      baseModelName: "V01R00",
      analysisPerform: "stiffness",
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
      email: "Felipe@example.com",
      simplePass: "felipe",
      role: "designer",
    },
    {
      name: "James",
      email: "James@example.com",
      simplePass: "james",
      role: "v2 engineer",
    },
    {
      name: "Abhi",
      email: "Abhi@example.com",
      simplePass: "abhi",
      role: "manager",
    },
    {
      name: "Matt",
      email: "Matt@example.com",
      simplePass: "matt",
      role: "admin",
    },
  ]);
  const allUsers = await User.findAll();
  console.log(allUsers);
}

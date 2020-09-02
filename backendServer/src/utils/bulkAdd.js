import { Sequelize, Model, DataTypes } from "sequelize";
import { sync } from "rimraf";
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
  db_connection
    .sync({
      force: true,
    })
    .then(() => {
      console.log(`Database & tables created!`);
      FeaRequestModel.bulkCreate([
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
      ])
        .then(function () {
          return FeaRequestModel.findAll();
        })
        .then(function (requests) {
          console.log(requests);
        });
    });
}
AddBulk();

async function requestBulkAdd() {
  await FeaRequest.bulkCreate([
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
  const allRequest = await FeaRequest.findAll();
  console.log(allRequest);
}

async function userBulkAdd() {
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

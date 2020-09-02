import { Sequelize, DataTypes } from "sequelize";

// import { db_connection } from "../utils/db_connection";
import db_connection from "../utils/db_connection";

export const FeaRequestModel = sequelize.define("request", {
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
export const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  simplePass: DataTypes.TEXT,
  role: DataTypes.TEXT,
});

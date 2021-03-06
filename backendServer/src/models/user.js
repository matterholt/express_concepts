const { DataTypes } = require("sequelize");

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define("user", {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    employeeNumber: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    email: DataTypes.TEXT,
    simplePass: DataTypes.TEXT,
    role: DataTypes.TEXT,
  });
};

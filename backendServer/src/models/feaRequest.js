const { DataTypes } = require("sequelize");

const requestModel = (sequelize) => {
  sequelize.define("request", {
    modelName: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    modelDescription: DataTypes.STRING,
    baseModelName: DataTypes.TEXT,
    requestStatus: {
      type: DataTypes.TEXT,
      defaultValue: "pending",
    },
    analysisPerform: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
export { requestModel };

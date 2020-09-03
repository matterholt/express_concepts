//https://www.hacksparrow.com/nodejs/exports-vs-module-exports.html

const feaRequest = (sequelize, DataTypes) => {
  const FeaRequestModel = sequelize.define("request", {
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

  FeaRequestModel.associate = (models) => {
    FeaRequestModel.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return FeaRequestModel;
};

export default feaRequest;

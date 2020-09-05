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
  });
};
export { requestModel };

/*

// const feaRequest = (sequelize, DataTypes) => {
//   const FeaRequestModel = sequelize.define("request", {
//     modelName: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       unique: true,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     // modelDescription: DataTypes.STRING,
//     // baseModelName: DataTypes.TEXT,
//     // requestStatus: {
//     //   type: DataTypes.TEXT,
//     //   defaultValue: "pending",
//     // },
//     // analysisPerform: {
//     //   type: DataTypes.TEXT,
//     //   allowNull: false,
//     // },
//   });

//   // FeaRequestModel.associate = (models) => {
//   //   FeaRequestModel.belongsTo(models.user, {
//   //     foreignKey: {
//   //       name: "creatorId",
//   //       allowNull: false,
//   //     },
//   //   });
//   // };

//   return FeaRequestModel;
// };

*/

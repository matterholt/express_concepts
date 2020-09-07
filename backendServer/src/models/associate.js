function applyAssociates(sequelize) {
  const { user, request } = sequelize.models;
  user.hasMany(request, {
    onDelete: "cascade",
  });

  request.belongsTo(user);
}
export { applyAssociates };

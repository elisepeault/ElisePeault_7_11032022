
module.exports = (DataTypes, sequelize) => {
  const User = sequelize.define('user', {
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return User;
};
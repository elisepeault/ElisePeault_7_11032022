// Import Sequelize
//const { Sequelize, DataTypes } = require('sequelize');

//const sequelize = new Sequelize('groupomania', 'root', 'Noob28Bun*');
//const sequelize = require('../app');

module.exports = (DataTypes, sequelize) => {
  const User = sequelize.define('user', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })
  //return User;
};
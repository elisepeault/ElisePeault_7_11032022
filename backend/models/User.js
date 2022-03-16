// Import Sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('groupomania', 'root', 'Noob28Bun*');
//const sequelize = new Sequelize('sqlite::memory:');
//'groupomania', 'root', 'Noob28Bun*'

const User = sequelize.define('User', {
  // Model attributes are defined here
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
    allowNull: false
  },
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

// Export the schema => in a model form
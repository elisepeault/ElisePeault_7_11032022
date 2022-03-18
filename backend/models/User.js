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


// const User = sequelize.define('user', {
//   // Model attributes are defined here
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
// }, {
// });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// // Export the schema => in a model form
// module.exports = User ;





// // Import Sequelize
// const Sequelize = require('sequelize');

// //const sequelize = new Sequelize('groupomania', 'root', 'Noob28Bun*');
// const sequelize = require('../app');

// const User = sequelize.define('user', {
//   // Model attributes are defined here
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
// }, {
//     //tableName: 'user'
// });

// // `sequelize.define` also returns the model
// //console.log(User === sequelize.models.User); // true

// // Export the schema => in a model form
// module.exports = User ;
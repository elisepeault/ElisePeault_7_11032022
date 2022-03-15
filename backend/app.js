// IMPORT
const express = require('express');
const { Sequelize } = require('sequelize'); 
const bodyParser = require('body-parser');

// Create an Express App
const app = express();

// Use Sequelize to connect to MySQL
const sequelize = new Sequelize('groupomania', 'root', 'Noob28Bun*', { 
  host: 'localhost', 
  dialect: 'mysql'
  }); 

// Test if the connection with MySQL is ok
sequelize.authenticate()
  .then(function() {
    console.log('Connection has been established successfully.');
  }, function(error) {
    console.log('Unable to connect to the database:', error);
  });


// General Middleware => CORS (allows a user to access resources from a server located on another origin than the current site)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
  });

// The json function is defined as the global middleware of this app
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

// Export the Express App (so that it becomes available on other files)
module.exports = app; 
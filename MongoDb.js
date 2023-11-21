const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://SayanGhosh:fypgb4iDzHLFB5To@file-sharing.dpkuhhu.mongodb.net/PackmanDashboard?retryWrites=true&w=majority';

mongoose
  .connect(dbURL)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error during connection to the database:', error);
  });

module.exports = mongoose;

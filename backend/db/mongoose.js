const mongoose = require('mongoose');
const { databasePlayers } = require('../config');
const { databaseClubs } = require('../config');
const { databaseReferees } = require('../config');
const { databaseUserAdmin } = require('../config');
const { databaseUserReferee } = require('../config');
const { databaseUserClub } = require('../config');

// Tworzenie nowych instancji Mongoose
const mongoosePlayers = new mongoose.Mongoose();
const mongooseClubs = new mongoose.Mongoose();
const mongooseReferees = new mongoose.Mongoose();
const mongooseUserAdmin = new mongoose.Mongoose();
const mongooseUserReferee = new mongoose.Mongoose();
const mongooseUserClub = new mongoose.Mongoose();


// Nawiązywanie połączeń
mongoosePlayers.connect(databasePlayers, {});
mongooseClubs.connect(databaseClubs, {});
mongooseReferees.connect(databaseReferees, {});
mongooseUserAdmin.connect(databaseUserAdmin, {
  useNewURLParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  console.log('connected MongoDB')
}).catch(error =>{console.log('There is connection error', error)})
mongooseUserReferee.connect(databaseUserReferee, {
  useNewURLParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  console.log('connected MongoDB')
}).catch(error =>{console.log('There is connection error', error)})
mongooseUserClub.connect(databaseUserClub, {
  useNewURLParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  console.log('connected MongoDB')
}).catch(error =>{console.log('There is connection error', error)})


module.exports = {
    mongoosePlayers,
    mongooseClubs,
    mongooseReferees,
    mongooseUserAdmin,
    mongooseUserReferee,
    mongooseUserClub
  };
  

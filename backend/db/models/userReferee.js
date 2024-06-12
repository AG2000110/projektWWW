const { mongooseUserReferee: mongoose } = require('../mongoose');

const UserRefereeSchema = new mongoose.Schema({
    userName: String, 
    password: String
})

const UserReferee = mongoose.model('UserReferee', UserRefereeSchema);
module.exports = UserReferee;
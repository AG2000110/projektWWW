const { mongooseUserClub: mongoose } = require('../mongoose');

const UserClubSchema = new mongoose.Schema({
    userName: String, 
    password: String
})

const UserClub = mongoose.model('UserClub', UserClubSchema);
module.exports = UserClub;
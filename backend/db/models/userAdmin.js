const { mongooseUserAdmin: mongoose } = require('../mongoose');

const UserAdminSchema = new mongoose.Schema({
    userName: String, 
    password: String
})

const UserAdmin = mongoose.model('UserAdmin', UserAdminSchema);
module.exports = UserAdmin;
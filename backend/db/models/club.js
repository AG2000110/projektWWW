const { mongooseClubs: mongoose } = require('../mongoose');

const ClubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
})

const Club = mongoose.model('Club', ClubSchema);

module.exports = Club;
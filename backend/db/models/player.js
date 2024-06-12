const { mongoosePlayers: mongoose } = require('../mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    club: {
        type: String,
        required: true,
    },
    license: {
        type: String,
        required: true,
    },
})

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;

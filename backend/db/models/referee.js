const { mongooseReferees: mongoose } = require('../mongoose');

const RefereeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    class2: {
        type: String,
        required: true,
    },
    license: {
        type: String,
        required: true,
    },
})

const Referee = mongoose.model('Referee', RefereeSchema);

module.exports = Referee;
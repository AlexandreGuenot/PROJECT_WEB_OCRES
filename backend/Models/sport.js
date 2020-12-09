const mongoose = require("mongoose");


const sportSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    valeur: {
        type: Number,
        required: true
    },
})
const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;
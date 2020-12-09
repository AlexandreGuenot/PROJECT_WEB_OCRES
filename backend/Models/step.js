const mongoose = require("mongoose");


const stepSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    valeur: {
        type: Number,
        required: true
    },
})
const Step = mongoose.model('Step', stepSchema);

module.exports = Step;
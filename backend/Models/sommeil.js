const mongoose = require("mongoose");


const sommeilSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    temps: {
        type: Number,
        requuired: true
    }
})

const Sommeil = mongoose.model('Sommeil', sommeilSchema);

module.exports = Sommeil;
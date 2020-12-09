const mongoose = require("mongoose");


const ecranSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    valeur: {
        type: Number,
        required: true
    },

})
const Ecran = mongoose.model('Ecran', ecranSchema);

module.exports = Ecran;
const mongoose = require("mongoose");


const visiteSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    valeur: {
        type: Number,
        required: true
    },

})
const Visite = mongoose.model('Visite', visiteSchema);

module.exports = Visite;
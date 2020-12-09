const mongoose = require("mongoose");


const consommationSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    valeur: {
        type: Number,
        required: true
    },

})
const Consommation = mongoose.model('Consommation', consommationSchema);

module.exports = Consommation;
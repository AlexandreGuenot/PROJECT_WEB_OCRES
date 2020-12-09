const db = require('../bin/db');
const Sport = require('../Models/sport');

const sportListe = [{
    titre: "Tennis",
    valeur: 2,
}, {
    titre: "Natation",
    valeur: 3,
}];


db.connect(function () {
    sportListe.forEach(sport => {
        let s = new Sport(sport)
        s.save();
    })
});



const db = require('../bin/db');
const Step = require('../Models/step');

const stepListe = [{
    titre: "Aujourd'hui",
    valeur: 2000,
}, {
    titre: "Hier",
    valeur: 1500,
}];


db.connect(function () {
    stepListe.forEach(step => {
        let s = new Step(step)
        s.save();
    })
});



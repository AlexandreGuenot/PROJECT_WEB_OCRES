const db = require('../bin/db');
const Consommation = require('../Models/consommation');

const Liste = [{
    titre: "Poisson",
    valeur: 0.2,
}, {
    titre: "Légumes",
    valeur: 0.3,
},
{
    titre: "Viandes",
    valeur: 0.1,
}, {
    titre: "Fruits",
    valeur: 0.2,
}
];
db.connect(function () {
    Liste.forEach(consommation => {
        let s = new Consommation(consommation)
        s.save();
    })
});


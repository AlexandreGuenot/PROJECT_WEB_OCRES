const db = require('../bin/db');
const Visite = require('../Models/visite');

const Liste = [{
    titre: "Trimestre 1",
    valeur: 2,
}, {
    titre: "Trimestre 2",
    valeur: 3,
},
{
    titre: "Trimestre 3",
    valeur: 4,
}, {
    titre: "Trimestre 4",
    valeur: 2,
}
];
db.connect(function () {
    Liste.forEach(data => {
        let s = new Visite(data)
        s.save();
    })
});


const db = require('../bin/db');
const Sommeil = require('../Models/sommeil');


const today = new Date();



const sommeilListe = [{
    date: new Date(today).setDate(today.getDate() - 14),
    temps: 2
}, {
    date: new Date(today).setDate(today.getDate() - 13),
    temps: 4
}, {
    date: new Date(today).setDate(today.getDate() - 12),
    temps: 8
}, {
    date: new Date(today).setDate(today.getDate() - 11),
    temps: 5
}, {
    date: new Date(today).setDate(today.getDate() - 10),
    temps: 9
}, {
    date: new Date(today).setDate(today.getDate() - 9),
    temps: 12
}, {
    date: new Date(today).setDate(today.getDate() - 8),
    temps: 9
}, {
    date: new Date(today).setDate(today.getDate() - 7),
    temps: 3
}, {
    date: new Date(today).setDate(today.getDate() - 6),
    temps: 5
}, {
    date: new Date(today).setDate(today.getDate() - 5),
    temps: 12
}, {
    date: new Date(today).setDate(today.getDate() - 4),
    temps: 2
}, {
    date: new Date(today).setDate(today.getDate() - 3),
    temps: 4
}, {
    date: new Date(today).setDate(today.getDate() - 2),
    temps: 7
}, {
    date: new Date(today).setDate(today.getDate() - 1),
    temps: 5
}, {
    date: today,
    temps: 2
}]
db.connect(function () {
    sommeilListe.forEach(sommeil => {
        let s = new Sommeil(sommeil)
        s.save();
    })
});


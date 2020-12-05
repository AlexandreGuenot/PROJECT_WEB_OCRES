const express = require('express');
const router = express.Router();
const Sommeil = require('../Models/sommeil');

router.get('/', async (req, res, next) => {

    try {
        // on récupère les sommeils depuis la db
        const today = new Date();
        const oneWeekAgo = new Date(today).setDate(today.getDate() - 7)// il ya une semaine
        const twoWeeksAgo = new Date(today).setDate(today.getDate() - 14) // il y a deux semaines


        let sommeilsOneWeekAgo = await Sommeil.find({ date: { "$gte": oneWeekAgo, "$lt": today } });
        let sommeilsTwoWeeksAgo = await Sommeil.find({ date: { "$gte": twoWeeksAgo, "$lt": oneWeekAgo } });
        let data = []
        for (let i in sommeilsOneWeekAgo) {
            data.push({
                date: sommeilsOneWeekAgo[i].date,
                oneWeekAgoTemps: sommeilsOneWeekAgo[i].temps,
                twoWeeksAgoTemps: sommeilsTwoWeeksAgo[i] ? sommeilsTwoWeeksAgo[i].temps : 0
            })
        }
        res.json(data)
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});


router.post('/', async (req, res, next) => {

    try {
        // on recup la date et le temps depuis le body
        const { temps, date } = req.body;
        let s = new Sommeil({
            temps,
            date
        })

        const savedSommeil = await s.save()
        res.json(savedSommeil)
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});

module.exports = router;

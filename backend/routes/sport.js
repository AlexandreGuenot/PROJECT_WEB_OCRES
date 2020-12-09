const express = require('express');
const router = express.Router();
const Sport = require('../Models/sport');

router.get('/', async (req, res) => {
    try {
        // on récupère les sport depuis la db
        let sports = await Sport.find();

        res.json(sports)

    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.delete('/:sportId', async (req, res) => {
    try {

        await Sport.deleteOne({ _id: req.params.sportId })
        res.json({
            success: true
        })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
});



router.put('/:sportId', async (req, res) => {
    try {

        await Sport.updateOne({ _id: req.params.sportId }, { titre: req.body.titre, valeur: req.body.valeur })
        res.json({ success: true })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.post('/', async (req, res, next) => {

    try {

        const { titre, valeur } = req.body;
        let s = new Sport({
            titre,
            valeur
        })

        const savedSport = await s.save()
        res.json(savedSport)
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});



module.exports = router;

const express = require('express');
const router = express.Router();
const Consommation = require('../Models/consommation');

router.get('/', async (req, res) => {
    try {
        // on récupère les consommation depuis la db
        let consommations = await Consommation.find();

        res.json(consommations)

    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.delete('/:consommationId', async (req, res) => {
    try {

        await Consommation.deleteOne({ _id: req.params.consommationId })
        res.json({
            success: true
        })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
});



router.put('/:consommationId', async (req, res) => {
    try {

        await Consommation.updateOne({ _id: req.params.consommationId }, { titre: req.body.titre, valeur: req.body.valeur })
        res.json({ success: true })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.post('/', async (req, res, next) => {

    try {

        const { titre, valeur } = req.body;
        let s = new Consommation({
            titre,
            valeur
        })

        const savedConsommation = await s.save()
        res.json(savedConsommation)
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});



module.exports = router;

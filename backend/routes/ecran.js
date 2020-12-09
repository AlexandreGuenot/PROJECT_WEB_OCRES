const express = require('express');
const router = express.Router();
const Ecran = require('../Models/ecran');

router.get('/', async (req, res) => {
    try {
        // on récupère les ecran depuis la db
        let ecrans = await Ecran.find();

        res.json(ecrans)

    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.delete('/:ecranId', async (req, res) => {
    try {

        await Ecran.deleteOne({ _id: req.params.ecranId })
        res.json({
            success: true
        })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
});



router.put('/:ecranId', async (req, res) => {
    try {

        await Ecran.updateOne({ _id: req.params.ecranId }, { titre: req.body.titre, valeur: req.body.valeur })
        res.json({ success: true })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.post('/', async (req, res, next) => {

    try {

        const { titre, valeur } = req.body;
        let s = new Ecran({
            titre,
            valeur
        })

        const savedEcran = await s.save()
        res.json(savedEcran)
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});



module.exports = router;

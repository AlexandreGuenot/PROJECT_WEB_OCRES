const express = require('express');
const router = express.Router();
const Visite = require('../Models/visite');

router.get('/', async (req, res) => {
    try {
        // on récupère les visite depuis la db
        let visites = await Visite.find();

        res.json(visites)

    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.delete('/:visiteId', async (req, res) => {
    try {

        await Visite.deleteOne({ _id: req.params.visiteId })
        res.json({
            success: true
        })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
});



router.put('/:visiteId', async (req, res) => {
    try {

        await Visite.updateOne({ _id: req.params.visiteId }, { titre: req.body.titre, valeur: req.body.valeur })
        res.json({ success: true })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.post('/', async (req, res, next) => {

    try {

        const { titre, valeur } = req.body;
        let s = new Visite({
            titre,
            valeur
        })

        const savedVisite = await s.save()
        res.json(savedVisite)
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});



module.exports = router;

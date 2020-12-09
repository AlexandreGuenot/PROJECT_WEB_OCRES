const express = require('express');
const router = express.Router();
const Step = require('../Models/step');

router.get('/', async (req, res) => {
    try {
        // on récupère les step depuis la db
        let steps = await Step.find();

        res.json(steps)

    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.delete('/:stepId', async (req, res) => {
    try {

        await Step.deleteOne({ _id: req.params.stepId })
        res.json({
            success: true
        })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
});



router.put('/:stepId', async (req, res) => {
    try {

        await Step.updateOne({ _id: req.params.stepId }, { titre: req.body.titre, valeur: req.body.valeur })
        res.json({ success: true })
    } catch (e) {
        console.error(err);
        res.sendStatus(400);
    }
})

router.post('/', async (req, res, next) => {

    try {

        const { titre, valeur } = req.body;
        let s = new Step({
            titre,
            valeur
        })

        const savedStep = await s.save()
        res.json(savedStep)
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});



module.exports = router;

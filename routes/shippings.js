const express = require('express');
const Shipping = require('../models/Shipping');
const router = express.Router();

router.get('/', (req, res) => {
    Shipping.find({}).sort({ _id: -1 })
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            return res.status(500).json({ message: error })
        })
});

router.post('/', (req, res) => {
    const shipping = new Shipping({
        order_id: req.body.order_id,
        quantity: req.body.quantity,
        shipping_cost: req.body.shipping_cost,
        shipping_date: req.body.shipping_date,
        shipping_status: req.body.shipping_status,
        notes: req.body.notes,
    });

    shipping.save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error })
        });
});

// Search data by ID
router.get('/:id', async (req, res) => {
    try {
        const shipping = await Shipping.findById(req.params.id);
        res.json(shipping);
    } catch (error) {
        res.json({ message: error })
    }
});

// Delete data
router.delete('/:id', async (req, res) => {
    console.log(req.params)
    try {
        const removedShipping = await Shipping.remove({ _id: req.params.id });
        res.json(removedShipping);
    } catch (error) {
        res.json({ message: error })
    }
});

// Update data
router.patch('/:id', async (req, res) => {
    try {
        const updatedShipping = await Shipping.updateOne(
            { _id: req.params.id },
            { $set: { shipping_status: req.body.shipping_status } },
        );
        res.json(updatedShipping);
    } catch (error) {
        res.json({ message: error })
    }
});

module.exports = router;
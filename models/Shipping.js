const mongoose = require('mongoose');
const shippingSchema = mongoose.Schema({
        order_id: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        shipping_cost: {
            type: Number,
            required: false
        },
        shipping_date: {
            type: Date,
            required: true
        },
        shipping_status: {
            type: String,
            required: true
        },
        notes: {
            type: String,
            required: false
        },
    });

module.exports = mongoose.model('Shipping', shippingSchema);
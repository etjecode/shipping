const mongoose = require('mongoose')
const shippingSchema = mongoose.Schema({
        order_id: {
            type: Number,
            required: true
            // allowNull: false
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
            required: true,
            default: Date.now
        },
        shipping_status: {
            type: String,
            enum: {
                values: ['Beklemede', 'Kargoya verildi', 'Teslim edildi'],
                message: '{VALUE} is not supported}'
            },
            default: 'Beklemede'
        },
        notes: {
            type: String,
            required: false
        }
    })

module.exports = mongoose.model('Shipping', shippingSchema)
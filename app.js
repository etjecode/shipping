const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const bodyParser = require('body-parser');
// To support JSON-encoded bodies
app.use(bodyParser.json());
// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

// Import item routes
// İŞLEM YAPTIĞIMIZDA DEVREYE GİRER.
const shippingRoute = require('./routes/shippings');

// Using as middleware
// ARA KATMAN: SUNUCU HER ÇALIŞTIĞINDA DEVREYE GİRER.
app.use('/shippings', shippingRoute);

app.get('/', (req,res) => {
    res.send('...');
});

app.get('/shippings', (req,res) => {
    res.send('...');
});

app.listen(3000);
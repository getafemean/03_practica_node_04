const express = require('express');
const app = express();

let facturas = [];

app.get('/', (req, res) => { // base path que sera /facturas
    res.status(200).json({
        message: 'Array con los facturas'
    })
})

module.exports = app;
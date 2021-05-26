const express = require('express');
const app = express();

let facturas = [];

app.get('/', (req, res) => { // base path que sera /facturas
    res.status(200).json({
        facturas
    })
})

app.post('/', (req, res) => {
    facturas.push(req.body);
    res.status(200).json({
        message: 'La factura se ha registrado correctamente'
    })
    console.log(facturas);
})

module.exports = app;
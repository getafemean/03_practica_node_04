const express = require('express');
const app = express();
const uuid = require('uuid');

let facturas = [];

app.get('/', (req, res) => { // base path que sera /facturas
    res.status(200).json({
        facturas
    })
})

app.get('/:id', (req, res) => {
    let factura = facturas.find(elem => {
        return elem.id === req.params.id
    })
    if (factura === undefined) {
        return res.status(404).json({
            message: 'No se encontró ninguna factura con ese id'
        })
    }
    res.status(200).json({
        factura
    })
})

app.post('/', (req, res) => {
    let factura = req.body;
    factura.id = uuid.v4();
    facturas.push(factura);
    res.status(200).json({
        message: 'La factura se ha registrado correctamente'
    })
    console.log(facturas);
})

module.exports = app;
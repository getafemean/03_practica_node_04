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

app.put('/:id', (req, res) => {
    if(req.body === undefined || JSON.stringify(req.body) === JSON.stringify({})) {
        return res.status(400).json({
            message: 'Datos de factura incorrectos'
        })
    }
    let posicion = facturas.findIndex(elem => {
        return elem.id === req.params.id;
    })
    if (posicion < 0) {
        return res.status(404).json({
            message: 'La factura no existe'
        })
    }
    if(req.body.cliente !== undefined) {
        facturas[posicion].cliente = req.body.cliente;
    }
    if(req.body.cif !== undefined) {
        facturas[posicion].cif = req.body.cif;
    }
    if(req.body.fechaFactura !== undefined) {
        facturas[posicion].fechaFactura = req.body.fechaFactura;
    }
    if(req.body.baseImponible !== undefined) {
        facturas[posicion].baseImponible = req.body.baseImponible;
    }
    if(req.body.tipoIVA !== undefined) {
        facturas[posicion].tipoIVA = req.body.tipoIVA;
    }
    if(req.body.user !== undefined) {
        facturas[posicion].user = req.body.user;
    }
    res.status(201).json({
        message: `La factura ha sido actualizada`
    })
})

app.delete('/:id', (req, res) => {
    let posicion = facturas.findIndex(elem => {
        return elem.id === req.params.id;
    })
    if (posicion < 0) {
        return res.status(404).json({
            message: 'La factura no existe'
        })
    }
    facturas.splice(posicion, 1);
    res.status(200).json({
        message: `La factura ha sido eliminada`
    })
})

module.exports = app;
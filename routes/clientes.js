const express = require('express');
const app = express();
const logs = require('../middleware/logs');

let clientes = [];

app.get('/', (req, res) => { // base path que sera /clientes
    res.status(200).json({
        message: 'Array con los clientes'
    })
})

app.get('/consulta-unica', (req, res) => { // base path que sera /clientes/consulta-unica
    res.status(200).json({
        message: 'Cliente único'
    })
})

app.post('/', logs.createLog, (req, res) => {
    clientes.push(req.body);
    res.status(200).json({
        message: 'El cliente se ha registrado correctamente'
    })
})

module.exports = app;


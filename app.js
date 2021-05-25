const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

const clientes = require('./routes/clientes');
const facturas = require('./routes/facturas');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/clientes', clientes);
app.use('/facturas', facturas);

app.listen(port, () => {
    console.log(`Servidor ok escuchando en http://localhost:${port}`);
})
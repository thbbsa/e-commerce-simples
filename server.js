const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.static('public'));

app.use('/imgs', express.static('imgs'));

app.get('/api/products', (req, res) => {
    const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
    res.json(products);
});

app.listen(3000, () => {
    console.log('Servidor Express rodando em http://localhost:3000');
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello WORLDO!' });
})

app.get('/ola', (req, res) => {
    res.status(200).send({ message: 'rota 1' });
})

app.listen(3001, () => {
    console.log('Api rodando na porta 3001');
})

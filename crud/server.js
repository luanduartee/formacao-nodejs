
const express = require('express');
const app = express();
const cors = require('cors');
const tasks = require('./routes/tasks');

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('API CRUD DE USUÁRIOS!');
})
app.use('/', tasks);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
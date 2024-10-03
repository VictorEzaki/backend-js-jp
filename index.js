const router = require('./src/routes/exercicio');
const express = require('express');
const app = express();

app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000")
})
const express = require('express');
const app = express();
app.use(express.json())

app.post("/exercicio1", (req, res) => {
    const { num1, num2 } = req.body
    res.send(`A soma de ${num1} + ${num2} é = ${num1 + num2}`)
})

app.post("/exercicio2", (req, res) => {
    // http://localhost:3000/exercicio2?valorHora=9.8&horas=800
    const { valorHora, horas } = req.body
    res.send(`Salário = R$ ${valorHora * horas}`)
})

app.post("/exercicio3", (req, res) => {
    const { pessoa1, pessoa2, pessoa3, pessoa4, pessoa5 } = req.body
    const result = (pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5) / 5
    res.send(`A média de pesso entra as 5 pessoas é = ${result}KG`)
})

app.post("/exercicio4", (req, res) => {
    const { temp } = req.body
    const result = (9*temp + 160)/5
    res.send(`${temp}C° em Fahrenheit é: ${result}°F`)
})

app.post("/exercicio5", (req, res) => {
    const { milhas } = req.body
    const result = (milhas *  1.60934).toFixed(2)
    res.send(`${milhas} em Quilomêtros é: ${result}km`)
})

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000")
})